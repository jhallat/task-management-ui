import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let auth;
    const value = localStorage.getItem('AuthObject');
    if (value) {
      auth = JSON.parse(value);
    }
    if (auth) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + auth.bearerToken)
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
