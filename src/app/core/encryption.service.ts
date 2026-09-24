// src/app/encryption.service.ts
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private secretKey = environment.encryptionKey;


 encrypt(data: any) {
    try {
      if (!this.secretKey) {
        // No runtime secret configured. Returning a JSON string as a fallback.
        // NOTE: This means data is NOT encrypted. Prefer injecting a runtime
        // secret or moving encryption to the server and using HTTPS.
        return JSON.stringify(data);
      }
      return CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
    } catch (e) {
      console.error('Encrypt error:', e);
      return '';
    }
  }

  decrypt(encryptedText: any){
    try {
      if (encryptedText === null || encryptedText === undefined) {
        return null;
      }

      // The global HTTP interceptor may already have decrypted the payload.
      // In that case the service should simply pass the parsed object through.
      if (typeof encryptedText === 'object') {
        return encryptedText;
      }

      if (typeof encryptedText !== 'string') {
        return encryptedText;
      }

      if (!encryptedText.trim()) {
        return null;
      }

      if (!this.secretKey) {
        // If no secret configured, assume the server returned plaintext JSON.
        try {
          return JSON.parse(encryptedText);
        } catch {
          return encryptedText;
        }
      }

      const bytes = CryptoJS.AES.decrypt(encryptedText, this.secretKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      if (!decrypted) {
        try {
          return JSON.parse(encryptedText);
        } catch {
          return null;
        }
      }

      try {
        return JSON.parse(decrypted);
      } catch {
        return decrypted;
      }
    } catch (e) {
      console.error('Decrypt error:', e);
      return null;
    }
  }

}
