import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() showLogin: boolean;
  @Output() hideLoginEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  hideLogin() {
    this.hideLoginEvent.emit(false);
  }
}
