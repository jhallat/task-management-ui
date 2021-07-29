import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-application-header',
  templateUrl: './application-header.component.html',
  styleUrls: ['./application-header.component.scss']
})
export class ApplicationHeaderComponent implements OnInit {

  @Input()
  displayMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

}
