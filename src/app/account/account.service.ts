import { Injectable } from '@angular/core';
import {Observable, Subscriber, BehaviorSubject, Subject, of} from 'rxjs';
import {UserAuth} from './user-auth';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  securityObject: UserAuth = new UserAuth();

  constructor() {  }

   login(entity: User): Observable<UserAuth> {
    this.securityObject.userName = entity.userName;
    if (entity.userName.toLowerCase() === 'guest') {
      this.securityObject.isAuthenticated = true;
    }
    return of(this.securityObject);
   }

   logout(): void {
    this.securityObject.init();
   }

}
