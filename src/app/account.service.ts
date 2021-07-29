import { Injectable } from '@angular/core';
import {Observable, Subscriber, BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  loggedIn = false;
  loggedIn$ = new BehaviorSubject(this.loggedIn);

  constructor() {  }

   isLoggedIn(): Observable<boolean> {
    return this.loggedIn$;
   }

   logon(username: string, password: string): Observable<boolean> {
     if (username === 'guest' && password === 'guest') {
       this.loggedIn = true;
       this.loggedIn$.next(this.loggedIn);
       return new Observable<boolean>(subscriber => {
          subscriber.next(true);
        });
     }
     this.loggedIn = false;
     this.loggedIn$.next(this.loggedIn);
     return new Observable<boolean>(subscriber => {
       subscriber.next(false);
     });
   }
}
