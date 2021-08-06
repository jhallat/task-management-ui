import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../shared/security/auth.guard';



@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'admin',
        component: AdminPageComponent,
        canActivate: [AuthGuard],
        data: {claimType: 'canAdminister'} }
    ])
  ]
})
export class AdminModule { }
