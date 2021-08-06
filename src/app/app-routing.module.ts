import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login/login-page/login-page.component';
import {NotImplementedPageComponent} from './not-implemented-page/not-implemented-page.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {AuthGuard} from './shared/security/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'checklist',
    component: NotImplementedPageComponent,
    canActivate: [AuthGuard]},
  { path: 'goals',
    component: NotImplementedPageComponent,
    canActivate: [AuthGuard]},
  { path: 'tasks',
    component: NotImplementedPageComponent,
    canActivate: [AuthGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
