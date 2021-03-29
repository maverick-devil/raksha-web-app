import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() hideLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  login(userId, userPassword): void {
    console.log(userId, userPassword);
    // Implement login service and use it here
  }

  hide() {
    this.hideLogin.emit(false);
  }
}
