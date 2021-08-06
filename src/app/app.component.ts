import {Component, OnDestroy, OnInit} from '@angular/core';
import {SecurityService} from './shared/security';
import {UserAuth} from './shared/security';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Menu} from './shared/models';


@Component({
  selector: 'app-root',
  template: `
    <div class="app-background">
      <app-application-header [menu] = "menu"
                              [accountName]="accountName()"
                              (logout)="onLogout()" ></app-application-header>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Get Everything Done !!!';
  securityObject: UserAuth | undefined;
  securitySubscription: Subscription | undefined;
  menu: Menu = new Menu();

  constructor(private securityService: SecurityService,
              private router: Router) {
    this.securityObject = securityService.securityObject;
    this.securitySubscription = this.securityService.securityReset
      .subscribe(() => {
        this.buildMenus();
      });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    if (this.securitySubscription) {
     this.securitySubscription.unsubscribe();
    }
  }

  buildMenus(): void {
    if (this.isAuthenticated()) {
      this.menu.addItem('Checklist', this.selectChecklist);
      this.menu.addItem('Goals', this.selectGoals);
      this.menu.addItem('Tasks', this.selectTasks);
      if (this.securityService.hasClaim('CanAdminister', 'true')) {
        this.menu.addItem('Admin', this.selectAdmin);
      }
      console.log(JSON.stringify(this.menu));
    } else {
      this.menu.clearItems();
    }
  }

  isAuthenticated(): boolean {
    if (this.securityObject === undefined) {
      return false;
    }
    return this.securityObject.isAuthenticated;
  }

  accountName(): string {
    if (this.securityObject === undefined) {
      return '';
    }
    return this.securityObject.userName;
  }


  onLogout(): void {
    this.securityService.logout();
    localStorage.removeItem('AuthObject');
    this.menu.clearItems();
    this.router.navigate(['login']);
  }

  selectChecklist = (): void => {
    this.menu.selectItem('Checklist');
    this.router.navigate(['checklist']);
  }

  selectGoals = (): void => {
  this.menu.selectItem('Goals');
  this.router.navigate(['goals']);
}

  selectTasks = (): void => {
    this.menu.selectItem('Tasks');
    this.router.navigate(['tasks']);
  }

  selectAdmin = (): void => {
    this.menu.selectItem('Admin');
    this.router.navigate(['admin']);
  }
}
