import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NavigationService } from 'src/app/services/common/navigation.service';
import { NgToastService } from 'ng-angular-popup';
import { CognitoService } from 'src/app/services/aws/cognito.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private navigation: NavigationService, 
    private fb: FormBuilder, 
    private toast: NgToastService,
    private cognitoService: CognitoService) {
      
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
      password: ['', [Validators.required]],
    });
    
  }

  ngOnInit(): void {}

  public AuthenticateUser() {
    let data = {
      email: this.myForm.getRawValue().email,
      password: this.myForm.getRawValue().password
    }

    this.cognitoService.AuthenticateUser(data).then(res => {
      this.toast.success({detail:"Ingreso correcto",summary:'Bienvenido a SmartFRA',duration:5000});
      this.navigation.NavigateToRoute('dashboard');
    }).catch(error => {
      this.toast.error({detail:"Error de Inicio de Sesión",summary:'Usuario o contraseña incorrectos.',duration:5000});
    })
  }

  public SubmitForm() {
    if (this.myForm.invalid) {
      this.toast.error({detail:"Error de Inicio de Sesión",summary:'Introduce tu informacion correctamente.',duration:5000});
      return;
    } else {
      this.AuthenticateUser();
    }
  }

  get f(): any {
    return this.myForm.controls;
  }

  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }

  public NavigateToRegister() {
    this.navigation.NavigateToRoute('register');
  }

  public NavigateToResetPass() {
    this.navigation.NavigateToRoute('forgot-password');
  }
}
