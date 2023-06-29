import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NavigationService } from 'src/app/services/common/navigation.service';
import { NgToastService } from 'ng-angular-popup';
import { CognitoService, RestorePasswordData } from 'src/app/services/aws/cognito.service';
import {AbstractControl, ValidatorFn} from '@angular/forms';
import { RestorePasswordService } from 'src/app/services/aws/restore-password.service';

@Component({
  selector: 'app-forgot-pass-resident',
  templateUrl: './forgot-pass-resident.component.html',
  styleUrls: ['./forgot-pass-resident.component.scss']
})
export class ForgotPassResidentComponent implements OnInit {
  myFormResetPass: FormGroup;
  myFormResetPassValidation: FormGroup;

  showPass = true;
  showPass2 = true;
  showModal=false;

  constructor(
    private navigation: NavigationService,
    private fb: FormBuilder,
    private fbV: FormBuilder,
    private toast: NgToastService,
    private cognitoService: CognitoService,
    private restorePassword: RestorePasswordService
  ) {
    this.myFormResetPass = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]]
    });

    this.myFormResetPassValidation = this.fbV.group({
      code: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      pass: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
      pass2: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]]
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
      this.SendVerificationCode(rawFormValues.email);
    }
  }

  SendVerificationCode(email: string) {
    this.restorePassword.SendRestorePasswordCode(email).then(result => {
      this.toast.info({detail:"Codigo Enviado",summary:'Revisa tu correo, por favor.',duration:5000});
      this.showModal = true;
    }).catch(error => {
      console.error('Error trying to send the verification code: ' + error);
      this.toast.error({detail:"Error al enviar su codigo",summary:'Por favor, intente mas tarde.',duration:5000})
    });
  }

  ChangePassword(email: string, verificationCode: string, newPassword: string) {
    this.restorePassword.VerifyRestorePasswordCode({ email: email, verificationCode: verificationCode, password: newPassword }).then(result => {
      this.navigation.NavigateToRoute('login');
      this.toast.success({detail:"Contraseña actualizada",summary:'Su contraseña ha sido correctamente actualizada.',duration:5000});
    }).catch(error => {
      console.error('Error trying to update password ' + error);
      this.toast.error({detail:"Error al actualizar su contraseña",summary:'Por favor, intente mas tarde.',duration:5000});
    });
  }

  public SubmitFormValidation() {
    const email = this.myFormResetPass.getRawValue().email;
    const verificationCode = this.myFormResetPassValidation.getRawValue().code;
    const password = this.myFormResetPassValidation.getRawValue().pass;

    if(!this.showModal)
    {
      return;
    }

    if(this.myFormResetPassValidation.invalid)
    {
      this.toast.error({detail:"Error en Informacion",summary:'Ingresa la informacion correcta',duration:5000});
      return;
    }

    const isSamePassword = this.myFormResetPassValidation.getRawValue().pass == this.myFormResetPassValidation.getRawValue().pass2;
    if(!isSamePassword)
    {
      this.toast.error({detail:"Error en Informacion",summary:'Las contraseñas no coinciden',duration:5000});
      return;
    }

    this.ChangePassword(email, verificationCode, password);
  }

  get f(): any {
    return this.myFormResetPass.controls;
  }

  get fV(): any {
    return this.myFormResetPassValidation.controls;
  }


  get email() {
    return this.myFormResetPass.get('email');
  }
  get code() {
    return this.myFormResetPass.get('code');
  }

  get pass() {
    return this.myFormResetPassValidation.get('pass');
  }

  get pass2() {
    return this.myFormResetPassValidation.get('pass2');
  }


  public NavigateToResetPass() {
    this.navigation.NavigateToRoute('forgot-password');
  }

  public NavigateToLogin() {
    this.navigation.NavigateToRoute('login-resident');
  }


}
