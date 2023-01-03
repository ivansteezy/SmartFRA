import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NavigationService } from 'src/app/services/common/navigation.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private navigation: NavigationService, private fb: FormBuilder, private toast: NgToastService) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  // metodo de envio de datos
  public SubmitForm() {
    if (this.myForm.invalid) {
      console.log('Form invalid');
      this.toast.error({detail:"Error de Inicio de Sesión",summary:'Introduce tu informacion correctamente.',duration:5000});
      return;
    } else {
      alert('Form is going to be send');
      this.toast.success({detail:"Ingreso correcto",summary:'Bienvenido a SmartFRA',duration:5000}); // Este mensajito realmente es solo de momento, la intención aqui es un redireccionamiento a Dashboard. 
      console.log(this.myForm.valid);
    }
  }

  // convenience getter for easy access to form fields
  get f(): any {
    return this.myForm.controls;
  }

  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }

  // Navigation Functions:
  public NavigateToRegister() {
    this.navigation.NavigateToRoute('register');
  }

  public NavigateToResetPass() {
    this.navigation.NavigateToRoute('register');
  }
}
