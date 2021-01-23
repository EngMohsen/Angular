import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PASSWORD, USERNAME } from '../constant/app.constants';
import { LoginBasicAuthService } from './login-basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  request!: HttpRequest<any>;

  constructor(private loginBasicAuth: LoginBasicAuthService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let  loginUserAuth = ''+this.loginBasicAuth.getToken();

    if (this.loginBasicAuth.isUserLoggedIn()) {
     req = req.clone({
        setHeaders: {
          Authorization: loginUserAuth
        }
      });
    }
    return next.handle(req);
  }
}
