import {Component, OnInit} from '@angular/core';
import {AccountService} from './account/account.service';
import {UserAuth} from "./account/user-auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Get Everything Done !!!';
  securityObject: UserAuth | undefined;

  constructor(private accountService: AccountService) {
    this.securityObject = accountService.securityObject;
  }

  ngOnInit(): void { }

  isAuthenticated() : boolean {
    if (this.securityObject === undefined) {
      return false;
    }
    return this.securityObject.isAuthenticated;
  }
}
