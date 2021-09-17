import { Component, OnInit } from '@angular/core';
import {ButtonBar} from '../../shared/models';
import {ClaimRequest, SecurityService, UserClaim} from '../../shared/security';

@Component({
  selector: 'app-new-user-page',
  template: `
    <div class="new-user-page-container">
    <app-form-layout [buttonBar]="buttonBar">
      <div heading-content>Add New User</div>
        <div class="new-user-form">
          <app-primary-field class="margin-top-small" [required]="true" [valid]="usernameValid" label="Username">
            <input [(ngModel)]="username"/>
            <div class="margin-left-small" appErrorLabel>{{ usernameError }}</div>
          </app-primary-field>
          <app-primary-field class="margin-top-small" [required]="true" [valid]="passwordValid" label="Password">
            <input [(ngModel)]="password" type="password"/>
            <div class="margin-left-small" appErrorLabel>{{ passwordError }}</div>
          </app-primary-field>
          <app-primary-field class="margin-top-small margin-bottom-small" [required]="true" [valid]="retypePasswordValid" label="Re-type Password">
            <input [(ngModel)]="retypePassword" type="password"/>
            <div class="margin-left-small" appErrorLabel>{{ retypePasswordError }}</div>
          </app-primary-field>
          <app-primary-checkbox class="margin-top-small"
                                [(selected)]="requireNew"
                                label="Require New Password on First Login"></app-primary-checkbox>
          <app-primary-checkbox class="margin-top-small"
                                [(selected)]="isAdmin"
                                label="Administrator"></app-primary-checkbox>
          <app-primary-checkbox class="margin-top-small"
                                [(selected)]="canAddNewUsers"
                                label="Can Add New Users"></app-primary-checkbox>
          <app-primary-checkbox class="margin-top-small"
                                [(selected)]="canDeleteUsers"
                                label="Can Delete Users"></app-primary-checkbox>
        </div>
        <div footer-contents class="new-user-page-response margin-top-small" [ngClass]="{'new-user-page-response-error' : responseError}">{{ response }}</div>
    </app-form-layout>
    </div>
  `,
  styleUrls: ['./new-user-page.component.scss']
})
export class NewUserPageComponent implements OnInit {

  buttonBar = new ButtonBar();
  username = '';
  password = '';
  retypePassword = '';
  requireNew = true;
  isAdmin = false;
  canAddNewUsers = false;
  canDeleteUsers = false;

  usernameValid = true;
  usernameError = '';
  passwordValid = true;
  passwordError = '';
  retypePasswordValid = true;
  retypePasswordError = '';

  response = '';
  responseError = false;

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
    this.buttonBar.addButton('Add', this.addUser);
    this.buttonBar.addButton('Cancel', this.cancel);
  }

  addUser = () => {
    console.log('Add User');
    if (this.username.trim().length === 0) {
      this.usernameValid = false;
      this.usernameError = 'Username is required';
    } else {
      this.usernameValid = true;
      this.usernameError = '';
    }
    if (this.password.trim().length === 0) {
      this.passwordValid = false;
      this.passwordError = 'Password is required';
    } else {
      this.passwordValid = true;
      this.passwordError = '';
    }
    if (this.password !== this.retypePassword) {
      this.retypePasswordValid = false;
      this.retypePasswordError = 'Passwords must match';
    } else {
      this.retypePasswordValid = true;
      this.retypePasswordError = '';
    }
    if (this.usernameValid && this.passwordValid && this.retypePasswordValid) {
      const user = { userId: '',  userName: this.username, password: this.password };
      const claims: ClaimRequest[] = [];
      claims.push({ type: 'RequireNewPassword', value: this.requireNew ? 'true' : 'false'});
      claims.push({ type: 'CanAdminister', value: this.isAdmin ? 'true' : 'false'});
      claims.push({ type: 'CanAddNewUsers', value: this.canAddNewUsers ? 'true' : 'false'});
      claims.push({ type: 'CanDeleteUsers', value: this.canDeleteUsers ? 'true' : 'false'});
      this.securityService.addUser(user, claims).subscribe({
          next: data => {
            if (data) {
              this.response = 'User successfully created';
              this.responseError = false;
            } else {
              this.response = 'Unable to create user';
              this.responseError = true;
            }
          }
      }
      );
    }
  }

  cancel = () => {
    console.log('Cancel');
  }
}
