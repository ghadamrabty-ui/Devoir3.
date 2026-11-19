import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  if (req.url.includes('/login')) {
    return next(req);
  }

  const jwt = authService.getToken();
  if (!jwt) {
    return next(req);
  }

  return next(req.clone({
    setHeaders: { Authorization: `Bearer ${jwt}` }
  }));
};