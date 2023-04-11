import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginResidentComponent } from './login-resident.component';

import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';

const MODULE_ROUTES = [
  { path: '', component: LoginResidentComponent }
];

@NgModule({
  declarations: [LoginResidentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MODULE_ROUTES),

    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginResidentModule { }
