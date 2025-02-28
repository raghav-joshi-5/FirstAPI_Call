import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authreqClone = req.clone({
      setHeaders: {
        AuthToken: 'JWT token from LS',
        'content-type': 'Application/json',
      },
    });
    return next.handle(authreqClone);
  }
}
