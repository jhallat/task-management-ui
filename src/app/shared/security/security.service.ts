import { Injectable } from '@angular/core';
import {Observable, Subscriber, BehaviorSubject, Subject, of} from 'rxjs';
import {UserAuth} from './user-auth';
import {User} from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {ClaimRequest, UserClaim} from './user-claim';

//TODO Get from env
const API = 'http://localhost:5010/api/security/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  securityObject: UserAuth = new UserAuth();
  private hasChanged = new BehaviorSubject<number>(0);
  securityReset = this.hasChanged.asObservable();

  constructor(private http: HttpClient) {  }

   login(entity: User): Observable<UserAuth> {
      delete entity.userId;

      return this.http.post<UserAuth>(`${API}login`, entity, httpOptions).pipe(
        tap(resp => {
          Object.assign(this.securityObject, resp);
          this.hasChanged.next(0);
        }),
        catchError(
          this.handleError<UserAuth>('login', 'Invalid username/password', new UserAuth()))
      );
   }

   logout(): void {
    this.securityObject.init();
    this.hasChanged.next(0);
   }

   handleError<T>(operation = 'operation', msg = '', result?: T): (error: any) => Observable<T> {
      return (error: any): Observable<T> => {
        console.log(msg + ' ' + JSON.stringify(error));
        return of(result as T);
      };
   }

   hasClaim(claimType: any, claimValue?: any): boolean {
    return this.isClaimValid(claimType, claimValue);
   }

   private isClaimValid(claimType: string, claimValue?: string): boolean {
      let auth: UserAuth | undefined;

      auth = this.securityObject;
      if (auth) {
        if (claimType.indexOf(':') >= 0) {
          const words = claimType.split(':');
          claimType = words[0].toLowerCase();
          claimValue = words[1];
        } else {
          claimType = claimType.toLowerCase();
          claimValue = claimValue ? claimValue : 'true';
        }
        return auth.claims.find(
          c => c.claimType.toLowerCase() === claimType && c.claimValue === claimValue) != null;
      }
      return false;
   }

  addUser(user: User, claims: ClaimRequest[]): Observable<boolean> {

    const newUser = {
      username: user.userName,
      password: user.password,
      claims
    };

    return this.http.post<boolean>(`${API}user`, newUser, httpOptions).pipe(
      map(resp => true),
      catchError(
        this.handleError<boolean>('addUser', 'Unable to add new user', false))
    );
  }
}
