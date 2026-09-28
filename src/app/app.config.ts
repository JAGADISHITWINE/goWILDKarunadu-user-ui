
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS, withInterceptorsFromDi } from '@angular/common/http';
import { AUTH_INTERCEPTOR_PROVIDER } from './core/auth.interceptor';
import { ERROR_INTERCEPTOR_PROVIDER } from './core/error.interceptor';
import { CryptoInterceptor } from './core/crypto.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    AUTH_INTERCEPTOR_PROVIDER,
    ERROR_INTERCEPTOR_PROVIDER,
    { provide: HTTP_INTERCEPTORS, useClass: CryptoInterceptor, multi: true }
  ]
};
