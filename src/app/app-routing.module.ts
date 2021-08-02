import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './account/login-page/login-page.component';
import {NotImplementedPageComponent} from './not-implemented-page/not-implemented-page.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'checklist', component: NotImplementedPageComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
