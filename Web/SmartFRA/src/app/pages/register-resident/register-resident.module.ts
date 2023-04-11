import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterResidentComponent } from './register-resident.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';


const MODULE_ROUTES = [
  { path: '', component: RegisterResidentComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(MODULE_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class RegisterResidentModule { }
