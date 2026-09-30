import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getToken(): string | null {
    try {
      return sessionStorage.getItem('token');
    } catch {
      return null;
    }
  }

  setToken(token: string) {
    try {
      sessionStorage.setItem('token', token);
    } catch (e) {
    }
  }

  clear() {
    try {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('userData');
    } catch (e) {
    }
  }

  decode(): any | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      // Use the named export `jwtDecode` from the library (v4+).
      return jwtDecode(token as string);
    } catch (e) {
      return null;
    }
  }

  getUserId(): string | null {
    if (!this.isValid()) {
      return null;
    }
    const decoded = this.decode();
    if (!decoded) return null;
    return String(decoded?.id ?? decoded?.userId ?? '').trim() || null;
  }

  isValid(): boolean {
    const decoded = this.decode();
    if (!decoded) return false;
    if (!decoded.exp) return true;
    const valid = decoded.exp * 1000 > Date.now();
    if (!valid) {
      this.clear();
    }
    return valid;
  }
}
