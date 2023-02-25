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
import { LoginUserComponent } from './pages/user/login-user/login-user.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule, 
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
