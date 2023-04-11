import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { RegisterResidentComponent } from '../forms/register-resident/register-resident.component';


const MODULE_ROUTES = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [
    DashboardComponent,
    RegisterResidentComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MODULE_ROUTES)
  ]
})
export class DashboardModule { }
