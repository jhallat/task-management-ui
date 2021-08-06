import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-primary-field',
  templateUrl: './primary-field.component.html',
  styleUrls: ['./primary-field.component.scss']
})
export class PrimaryFieldComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('class')
  classNames = '';

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
  }

}
