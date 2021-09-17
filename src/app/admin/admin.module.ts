import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../shared/security/auth.guard';
import { NewUserPageComponent } from './new-user-page/new-user-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AdminPageComponent,
    NewUserPageComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminPageComponent,
        canActivate: [AuthGuard],
        data: {claimType: 'canAdminister'}
      }
    ]),
    FormsModule
  ]
})
export class AdminModule { }
