import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-primary-field',
  template: `
    <div class="primary-field" [ngClass]="classNames">
      <div class="margin-left-small" [ngClass]="{'required' : required, 'error' : !valid}">
        <label [ngClass]="{'error': !valid}">{{ label }}</label>
      </div>
      <div [ngClass]="{'error' : !valid }">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./primary-field.component.scss']
})
export class PrimaryFieldComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('class') classNames = '';
  @Input() label = '';
  @Input() required = false;
  @Input() valid = true;

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {

  }

}
