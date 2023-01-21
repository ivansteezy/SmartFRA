import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';

const MODULE_ROUTES = [
  { path: '', component: ForgotPasswordComponent}
];


@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MODULE_ROUTES),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ForgotPasswordModule { }
