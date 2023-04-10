import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { RegisterResidentComponent } from '../forms/register-resident/register-resident.component';
import { NavbarComponent } from '../common/NavBar/navbar.component';
import { MenuBarComponent } from '../common/menu-bar/menu-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





const MODULE_ROUTES = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [
    DashboardComponent,
    RegisterResidentComponent,
    NavbarComponent,
    MenuBarComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MODULE_ROUTES),
    ReactiveFormsModule,
    FormsModule

    
  ]
})
export class DashboardModule { }
