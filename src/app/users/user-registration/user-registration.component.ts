import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  @Input() showRegistration: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
