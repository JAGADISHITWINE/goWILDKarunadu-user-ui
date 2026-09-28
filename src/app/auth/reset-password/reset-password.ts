import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EncryptionService } from 'src/app/core/encryption.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResetPassword {

  constructor(private http: HttpClient, private crypto: EncryptionService) { }
  private API = environment.baseUrl

  // Submit new password with token from URL
  resetPassword(data: { token: string; password: string }): Observable<any> {
    const encryptedPayload = this.crypto.encrypt(data);
    return this.http.post<any>(`${this.API}/reset-password`, { encryptedPayload }).pipe(
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

  // Optional: validate token when reset-password page loads
  validateResetToken(token: string): Observable<any> {
    const encryptedPayload = this.crypto.encrypt({ token });
    return this.http.post<any>(`${this.API}/validate-reset-token`, { encryptedPayload }).pipe(
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
