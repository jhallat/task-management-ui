import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  template: `
  <app-page>
    <div class="admin-page-heading" heading-contents>
      <div>Administration</div>
      <div class="admin-page-menu-bar">
        <button appAccentButton>Add New User</button>
      </div>
    </div>
    <div class="admin-page-container">
        <app-new-user-page></app-new-user-page>
    </div>
  </app-page>
  `,
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
