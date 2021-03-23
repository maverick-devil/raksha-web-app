import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-fir-registration',
  templateUrl: './fir-registration.component.html',
  styleUrls: ['./fir-registration.component.css']
})
export class FirRegistrationComponent implements OnInit {

  @Input() showRegistration: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
