import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpHandler, HttpInterceptor,
  HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenService } from './token.service';
import { Sessionexpired } from '../auth/sessionexpired/sessionexpired';
import { AuthModalService } from '../auth/auth-modal.service';

// Specific public authentication endpoints that do not require an authorization bearer token.
// Generic substrings like '/auth' must NOT be used because backend API routes are mounted under '/api/auth/'.
const PUBLIC_AUTH_PATHS = [
  '/login',
  '/register',
  '/send-otp',
  '/verify-otp',
  '/forgot-password',
  '/reset-password',
  '/validate-reset-token',
  '/signin'
];

function isPublicAuthEndpoint(url: string): boolean {
  if (!url) return false;
  const cleanUrl = url.split('?')[0].replace(/\/+$/, '');
  return PUBLIC_AUTH_PATHS.some(path => cleanUrl.endsWith(path));
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private sessionService: Sessionexpired,
    private authModal: AuthModalService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isPublicAuth = isPublicAuthEndpoint(req.url);
    const authReq      = isPublicAuth ? req : this.attachToken(req);

    return next.handle(authReq).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse && err.status === 401 && !isPublicAuth) {
          const hadToken = !!this.tokenService.getToken();

          // Clear everything regardless
          this.tokenService.clear();
          try { sessionStorage.removeItem('currentUser'); } catch {}
          try { localStorage.removeItem('authToken'); } catch {}

          if (hadToken) {
            // Was logged in → token got rejected by server = session expired
            this.sessionService.notifyExpired();
          } else {
            // Was never logged in → tried to access protected resource = prompt login
            this.authModal.openLogin();
          }
        }

        return throwError(() => err);
      })
    );
  }

  private attachToken(req: HttpRequest<any>): HttpRequest<any> {
    try {
      const token = this.tokenService.getToken();
      if (token) {
        return req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        });
      }
    } catch (e) {
    }
    return req;
  }
}

export const AUTH_INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};