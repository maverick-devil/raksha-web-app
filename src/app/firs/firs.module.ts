import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirRegistrationComponent } from './fir-registration/fir-registration.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [FirRegistrationComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    FirRegistrationComponent
  ]
})
export class FirsModule { }
