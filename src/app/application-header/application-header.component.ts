import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Menu} from '../shared/models';

@Component({
  selector: 'app-application-header',
  template: `
    <div class="header-container">
      <div class="header-banner">
        <img class="header-logo" src="../../assets/to-do-logo-v2.svg">
        <div class="header-title">Get Everything Done !!!</div>
        <div class="header-space">&nbsp;</div>
        <div *ngIf="accountName != ''" class="account-menu">
          <div class="account-dropdown">
            <img class="account-logo" src="../../assets/account_circle_black_24dp.svg">
            <div class="account-user">{{ accountName }}</div>
          </div>
          <div class="account-dropdown-content">
            <div class="account-dropdown-item" (click)="onLogout()">Logout</div>
          </div>
        </div>
      </div>
      <div class="header-navigation">
        <div *ngFor = "let item of menu.items"
             class="header-navigation-link"
             [ngClass]="{'selected' : item.selected}"
             (click) = "item.action()">
          {{ item.name }}
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./application-header.component.scss']
})
export class ApplicationHeaderComponent implements OnInit {

  @Input() accountName = '';
  @Input() menu: Menu = new Menu();
  @Output('logout') logoutEvent = new EventEmitter<void>();
  selectedPage = 'checklist';

  constructor() { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.logoutEvent.emit();
  }
}
