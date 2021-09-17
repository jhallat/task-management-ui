import { Component, OnInit } from '@angular/core';
import {SecurityService} from '../../shared/security/security.service';
import {Router} from '@angular/router';
import {User} from '../../shared/security/user';
import {UserAuth} from '../../shared/security/user-auth';

@Component({
  selector: 'app-login-page',
  template: `
    <app-page>
      <div heading-contents>Login</div>
      <div class="login-page-container">
        <div class="login-form">
          <app-primary-field class="margin-top-small" label="Username">
            <input [(ngModel)]="user.userName" primaryInput/>
          </app-primary-field>
          <app-primary-field class="margin-top-small" label="Password">
            <input [(ngModel)]="user.password" primaryInput type="password">
          </app-primary-field>
          <div class="row justify-right margin-top-small">
            <button appPrimaryButton (click)="onLogin()">Logon</button>
          </div>
          <div class="login-form-error margin-left-small" *ngIf="invalidCredentials">Invalid username/password</div>
          <div appPrimaryLink class="row margin-left-small">Forgot username or password?</div>
          <div appPrimaryLink class="row margin-left-small">Sign up for an account</div>
        </div>
        <aside>
          <h3>Application Under Construction</h3>
          <p>
            Most of the functionality of this application has not yet been fully implemented. When complete, this personal
            task manager will help you ...
          </p>
          <ul>
            <li>Keep track of daily tasks</li>
            <li>Set goals and identify tasks to meet those goals</li>
            <li>Schedule on time and reoccurring tasks</li>
          </ul>
        </aside>
      </div>
    </app-page>
  `,
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user = new User();
  securityObject: UserAuth | undefined;
  invalidCredentials = false;

  constructor(private accountService: SecurityService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.securityObject?.init();
    this.accountService.login(this.user)
      .subscribe(resp => {
        this.securityObject = resp;
        localStorage.setItem('AuthObject', JSON.stringify(resp));
        if (this.securityObject.isAuthenticated) {
          this.router.navigate(['checklist']);
        } else {
          this.invalidCredentials = true;
        }
      });
  }
}
