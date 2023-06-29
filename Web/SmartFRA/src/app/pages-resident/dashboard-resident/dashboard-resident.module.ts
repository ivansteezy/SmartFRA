import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardResidentComponent } from './dashboard-resident.component';
import { MyEventsComponent } from '../my-events/my-events.component';
import { MyVisitsComponent } from '../my-visits/my-visits.component';
import { MyHouseComponent } from '../my-house/my-house.component';

const MODULE_ROUTES = [
  { path: '', component: DashboardResidentComponent }
];

@NgModule({
  declarations: [
    DashboardResidentComponent,
    MyEventsComponent,
    MyVisitsComponent,
    MyHouseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(MODULE_ROUTES),
  ]
})
export class DashboardResidentModule { }
