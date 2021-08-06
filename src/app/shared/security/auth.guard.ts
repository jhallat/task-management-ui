import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {SecurityService} from './security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: SecurityService,
              private router: Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const claimType = route.data.claimType;
    const auth = localStorage.getItem('AuthObject');
    if (auth) {
      Object.assign(this.accountService.securityObject, JSON.parse(auth));
    }

    if (this.accountService.securityObject.isAuthenticated) {
      if (claimType) {
        return this.accountService.hasClaim(claimType, 'true');
      }
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }

  }

}
