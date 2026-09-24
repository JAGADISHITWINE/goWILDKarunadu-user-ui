import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { EncryptionService } from 'src/app/core/encryption.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Register {
  constructor(private http: HttpClient, private crypto: EncryptionService) { }
  private API = environment.baseUrl

  register(data: any) {
    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password
    }
    const encryptedPayload = this.crypto.encrypt(payload);

    return this.http.post<any>(`${this.API}/register`, { encryptedPayload })
      .pipe(
        map((res: any) => {
          try {
            const decrypted = this.crypto.decrypt(res.data);
            if (decrypted && decrypted.token) {
              sessionStorage.setItem('token', decrypted.token);
              return decrypted;
            }
            throw new Error('Invalid response format');
          } catch (error) {
            console.error('Decryption error:', error);
            throw error;
          }
        }),
      );
  }

  sendOtp(email: string, phone : string) {
    const encryptedPayload = this.crypto.encrypt({ email, phone });
    return this.http.post<any>(`${this.API}/send-otp`, { encryptedPayload }).pipe(
      map((res: any) => {
        if (!res?.data) return res;
        try {
          const decrypted = this.crypto.decrypt(res.data);
          return { ...res, data: decrypted };
        } catch {
          return res;
        }
      })
    );
  }

  verifyOtp(email: string, otp: string) {
    const encryptedPayload = this.crypto.encrypt({ email, otp });
    return this.http.post<any>(`${this.API}/verify-otp`, { encryptedPayload }).pipe(
      map((res: any) => {
        if (!res?.data) return res;
        try {
          const decrypted = this.crypto.decrypt(res.data);
          return { ...res, data: decrypted };
        } catch {
          return res;
        }
      })
    );
  }

}
