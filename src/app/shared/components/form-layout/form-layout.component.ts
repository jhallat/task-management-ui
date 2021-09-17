import {Component, Input, OnInit} from '@angular/core';
import {ButtonBar} from '../../models';

@Component({
  selector: 'app-form-layout',
  template: `
    <div class="form-layout-container">
      <div class="form-layout-heading">
        <ng-content select="[heading-content]"></ng-content>
      </div>
      <div class="form-layout-contents">
        <ng-content></ng-content>
      </div>
      <div class="form-layout-actions row justify-right margin-top-med-small">
         <button *ngFor="let button of buttonBar.buttons"
                 appPrimaryButton
                 (click)="button.action()">{{ button.name }}</button>
      </div>
      <div class="form-layout-footer">
        <ng-content select="[footer-contents]"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./form-layout.component.scss']
})
export class FormLayoutComponent implements OnInit {

  @Input() buttonBar: ButtonBar = new ButtonBar();

  constructor() { }

  ngOnInit(): void {
  }

}
