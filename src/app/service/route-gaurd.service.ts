import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginBasicAuthService } from './login-basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate,CanActivateChild{

  constructor(private loginAuthentication: LoginBasicAuthService,
    private route:Router) { }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.loginAuthentication.isUserLoggedIn()) {
      return true;
    }
    this.route.navigate(['login']);
    return false;
  }
    
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginAuthentication.isUserLoggedIn()) {
      return true;
    }
    this.route.navigate(['login']);
    return false;
  }

}
