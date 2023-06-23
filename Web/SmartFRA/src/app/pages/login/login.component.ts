import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NavigationService } from 'src/app/services/common/navigation.service';
import { NgToastService } from 'ng-angular-popup';
import { CognitoService } from 'src/app/services/aws/cognito.service';
import { catchError, tap } from 'rxjs';
import { HttpRequestsService } from 'src/app/services/common/http-requests.service';

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
    private cognitoService: CognitoService,
    private http: HttpRequestsService) {
      
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
      password: ['', [Validators.required]],
    });
    
  }

  ngOnInit(): void {
    // Validacion de sesiones:
    if (sessionStorage.getItem('apiResponse') !== null) {
      // La variable existe en sessionStorage
      console.log('Hay una sesion activa!');
      this.navigation.NavigateToRoute('dashboard');
    } else {
      // La variable no existe en sessionStorage
      console.log('Se ha perdido la sesion o no existe');
    }
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

      // this.http.Get<any>(apiUrl)
      // .subscribe(
      //   response => {
      //     const apiResponse = response;
      //     console.log(apiResponse);
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // );

          this.toast.success({detail:"Ingreso correcto",summary:'Bienvenido a SmartFRA',duration:5000});
          //relocation
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
