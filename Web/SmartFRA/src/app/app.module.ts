import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup';

import { ToastrModule } from 'ngx-toastr';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginResidentComponent } from './pages/user/login-resident/login-resident.component';
import { QRCodeModule } from 'angularx-qrcode';
import { RegisterUserComponent } from './pages/admon/register-user/register-user.component';
import { DashboardResidentComponent } from './pages/user/dashboard-resident/dashboard-resident.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    DashboardResidentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule, 
    NgToastModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
