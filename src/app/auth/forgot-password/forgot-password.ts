import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EncryptionService } from 'src/app/core/encryption.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ForgotPassword {

  constructor(private http: HttpClient, private crypto: EncryptionService) { }
  private API = environment.baseUrl

// Send reset link to email
forgotPassword(email: string): Observable<any> {
  const encryptedPayload = this.crypto.encrypt({ email });
  return this.http.post<any>(`${this.API}/forgot-password`, { encryptedPayload }).pipe(
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
