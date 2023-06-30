import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NavigationService } from 'src/app/services/common/navigation.service';
import { NgToastService } from 'ng-angular-popup';
import { CognitoService } from 'src/app/services/aws/cognito.service';

@Component({
  selector: 'app-login-resident',
  templateUrl: './login-resident.component.html',
  styleUrls: ['./login-resident.component.scss']
})

export class LoginResidentComponent implements OnInit {
  myForm: FormGroup;

  show = false;

  getCurrentSession(){
    if((sessionStorage.getItem("token") != null)){
      this.NavigateToLogin();

      console.log("Hay una sesion de residente activa");
    }else{
      console.log("No una sesion de residente activa :D");
    }
  }

  constructor(
    private navigation: NavigationService,
    private fb: FormBuilder,
    private toast: NgToastService,
    private cognitoService: CognitoService
  ) {

    this.getCurrentSession();

    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
      password: ['', [Validators.required]],
    });
  }

  async ngOnInit() {
  }

  public AuthenticateUser() {
    let data = {
      email: this.myForm.getRawValue().email,
      password: this.myForm.getRawValue().password
    }

    const apiUrl = `http://localhost:3000/resident/ResidentByEmail/${data['email']}`;

    this.cognitoService.AuthenticateUser(data).then(res => {
      console.log("Authentication good AWS");
      console.log(res);
      /* search in database*/
          this.toast.success({detail:"Ingreso correcto",summary:'Bienvenido a SmartFRA',duration:5000});
          //relocation
          this.navigation.NavigateToRoute('dashboard-resident');
      
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
  get name() {
    return this.myForm.get('name');
  }

  get lastname() {
    return this.myForm.get('lastname');
  }

  get telNumber() {
    return this.myForm.get('telNumber');
  }

  get password() {
    return this.myForm.get('password');
  }

  public NavigateToRegister() {
    this.navigation.NavigateToRoute('register');
  }

  public NavigateToResetPass() {
    this.navigation.NavigateToRoute('forgot-password-resident');
  }

  public NavigateToLogin() {
    this.navigation.NavigateToRoute('login-resident');
  }

}
