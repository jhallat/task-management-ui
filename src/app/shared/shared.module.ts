import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { PrimaryButtonDirective } from './primary-button.directive';
import { PrimaryFieldComponent } from './primary-field/primary-field.component';
import { PrimaryLinkDirective } from './primary-link.directive';



@NgModule({
    declarations: [
        PageComponent,
        PageHeadingComponent,
        PrimaryButtonDirective,
        PrimaryFieldComponent,
        PrimaryLinkDirective
    ],
  exports: [
    PageHeadingComponent,
    PageComponent,
    PrimaryButtonDirective,
    PrimaryFieldComponent,
    PrimaryLinkDirective
  ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
