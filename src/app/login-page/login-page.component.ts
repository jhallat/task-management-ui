import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username = '';
  password = '';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onLogon(): void {
    this.accountService.logon(this.username, this.password).subscribe(
      data => console.log(data)
    );
  }
}
