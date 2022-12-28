import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';

const MODULE_ROUTES = [
  { path: '', component: RegisterComponent }
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MODULE_ROUTES),

    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
