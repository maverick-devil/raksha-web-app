import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Raksha';
  showLogin: boolean = false;
  showRegistration: boolean = false;

  hideRegistration(bool: boolean) {
    this.showRegistration = bool;
  }

  hideLogin(bool: boolean) {
    this.showLogin = bool;
  }
}
