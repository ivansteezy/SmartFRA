import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NavigationService } from 'src/app/services/common/navigation.service';
import { NgToastService } from 'ng-angular-popup';
import { CognitoService } from 'src/app/services/aws/cognito.service';
import {AbstractControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
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
    private cognitoService: CognitoService
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
      console.log(rawFormValues);
      this.toast.info({detail:"Codigo Enviado",summary:'Revisa tu correo, por favor.',duration:5000});
      this.showModal = true;
    }
  }

  public SubmitFormValidation() {

    if(this.showModal){
      if (this.myFormResetPassValidation.invalid) {
        this.toast.error({detail:"Error en Informacion",summary:'Ingresa la informacion correcta',duration:5000});       
      } else {
        if(this.myFormResetPassValidation.getRawValue().pass != this.myFormResetPassValidation.getRawValue().pass2){
          this.toast.error({detail:"Error en Informacion",summary:'Las contraseñas no coinciden',duration:5000}); 
        }else{
          console.log("im gonna work bitch");
        }
        
      }
    }
  
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



