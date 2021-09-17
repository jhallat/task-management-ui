import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <div class="page-container">
      <div class="page-heading">
        <ng-content select="[heading-contents]"></ng-content>
      </div>
      <div class="page-contents">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
