import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-primary-checkbox',
  template: `
    <div class="primary-checkbox-container">
      <div *ngIf="selected" (click)="toggleSelected()">
        <svg class="primary-checkbox-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
          <path d="M0 0h24v24H0z" fill="white"/>
          <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" stroke-linejoin="round"/>
        </svg>
      </div>
      <div *ngIf="!selected" (click)="toggleSelected()">
        <svg class="primary-checkbox-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="primary-checkbox-label">{{ label }}</div>
    </div>
  `,
  styleUrls: ['./primary-checkbox.component.scss']
})
export class PrimaryCheckboxComponent implements OnInit {

  @Input() label = '';
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelected(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
