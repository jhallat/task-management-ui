import { Component, OnInit } from '@angular/core';
import {SecurityService} from '../../shared/security/security.service';
import {Router} from '@angular/router';
import {User} from '../../shared/security/user';
import {UserAuth} from '../../shared/security/user-auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
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
