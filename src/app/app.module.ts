import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationHeaderComponent } from './application-header/application-header.component';
import {SharedModule} from "./shared/shared.module";
import { LoginPageComponent } from './account/login-page/login-page.component';
import { NotImplementedPageComponent } from './not-implemented-page/not-implemented-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ApplicationHeaderComponent,
    LoginPageComponent,
    NotImplementedPageComponent,
    NotFoundPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
