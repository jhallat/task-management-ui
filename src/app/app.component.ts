import {Component, OnInit} from '@angular/core';
import {AccountService} from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Get Everything Done !!!';
  isLoggedIn = false;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountService.isLoggedIn().subscribe(
      data => {
        this.isLoggedIn = data;
      }
    );
  }
}
