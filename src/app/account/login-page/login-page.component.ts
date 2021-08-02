import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';
import {Router} from '@angular/router';
import {User} from "../user";
import {UserAuth} from "../user-auth";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user = new User();
  securityObject: UserAuth | undefined;

  constructor(private accountService: AccountService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.securityObject?.init();
    this.accountService.login(this.user)
      .subscribe(resp => this.securityObject = resp);
  }
}
