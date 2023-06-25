import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterResidentComponent } from '../register-resident/register-resident.component';
import { HousesAdminComponent } from '../houses-admin/houses-admin.component';

const MODULE_ROUTES = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [
    DashboardComponent,
    RegisterResidentComponent,
    HousesAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MODULE_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
