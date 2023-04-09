import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup';

import { ToastrModule } from 'ngx-toastr';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginResidentComponent } from './pages/user/login-resident/login-resident.component';
import { QRCodeModule } from 'angularx-qrcode';
import { DashboardResidentComponent } from './pages/user/dashboard-resident/dashboard-resident.component';
import { RegisterResidentComponent } from './pages/forms/register-resident/register-resident.component';
import { NavbarComponent } from './pages/common/NavBar/navbar.component';
import { MenuBarComponent } from './pages/common/menu-bar/menu-bar.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule, 
    NgToastModule,
    QRCodeModule,
    
    
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
 }
