import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PrimaryLinkDirective,
  AccentButtonDirective,
  PrimaryButtonDirective,
  ErrorLabelDirective
} from './style-directives';
import { PageComponent, PrimaryFieldComponent, FormLayoutComponent } from './components';
import {httpInterceptorProviders} from './security';
import { PrimaryCheckboxComponent } from './components/primary-checkbox/primary-checkbox.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        PageComponent,
        PrimaryButtonDirective,
        AccentButtonDirective,
        ErrorLabelDirective,
        PrimaryFieldComponent,
        PrimaryLinkDirective,
        FormLayoutComponent,
        PrimaryCheckboxComponent
    ],
  exports: [
    PageComponent,
    FormLayoutComponent,
    PrimaryButtonDirective,
    PrimaryFieldComponent,
    PrimaryLinkDirective,
    AccentButtonDirective,
    PrimaryCheckboxComponent,
    ErrorLabelDirective,
    FormsModule
  ],
    imports: [
        CommonModule,
        FormsModule
    ],
  providers: [httpInterceptorProviders]
})
export class SharedModule { }
