import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ForgotPassResidentComponent } from './forgot-pass-resident.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';

const MODULE_ROUTES = [
  { path: '', component: ForgotPassResidentComponent}
];

@NgModule({
  declarations: [ForgotPassResidentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MODULE_ROUTES),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ForgotPassResidentModule { }
