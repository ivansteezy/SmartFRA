import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NavigationService } from 'src/app/services/common/navigation.service';
import { NgToastService } from 'ng-angular-popup';
import { CognitoService } from 'src/app/services/aws/cognito.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  myFormResetPass: FormGroup;

  constructor(
    private navigation: NavigationService,
    private fb: FormBuilder,
    private fbV: FormBuilder,
    private toast: NgToastService,
    private cognitoService: CognitoService
  ) {
    this.myFormResetPass = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]]
    });
  }

  ngOnInit(): void {
  }

  public SubmitForm() {
    if (this.myFormResetPass.invalid) {
      this.toast.error({detail:"Error de Datos",summary:'Introduce la información correctamente.',duration:5000});      
      return;

    } else {
      const rawFormValues = this.myFormResetPass.getRawValue();
      console.log(rawFormValues);
      this.toast.info({detail:"Codigo Enviado",summary:'Revisa tu correo, por favor.',duration:5000});
    }
  }

  get f(): any {
    return this.myFormResetPass.controls;
  }

  public NavigateToRegister() {
    this.navigation.NavigateToRoute('register');
  }

  public NavigateToResetPass() {
    this.navigation.NavigateToRoute('forgot-password');
  }

  public NavigateToLogin() {
    this.navigation.NavigateToRoute('login');
  }
}
