import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';
import { PrimaryButtonDirective } from './style-directives';
import { PrimaryFieldComponent } from './components/primary-field/primary-field.component';
import { PrimaryLinkDirective } from './style-directives';
import {httpInterceptorProviders} from './security';



@NgModule({
    declarations: [
        PageComponent,
        PrimaryButtonDirective,
        PrimaryFieldComponent,
        PrimaryLinkDirective
    ],
  exports: [
    PageComponent,
    PrimaryButtonDirective,
    PrimaryFieldComponent,
    PrimaryLinkDirective
  ],
    imports: [
        CommonModule
    ],
  providers: [httpInterceptorProviders]
})
export class SharedModule { }
