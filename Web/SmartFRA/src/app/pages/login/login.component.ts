import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NavigationService } from 'src/app/services/common/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  myForm:FormGroup;

  constructor(private navigation: NavigationService) { 

    this.myForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]),
      'password': new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  // metodo de envio de datos
  public SubmitForm(){
    if(this.myForm.invalid){
      console.log("Formulario invalido");
      return;
    }else{
      alert("Se va a envioar el formulario");
      console.log(this.myForm.valid);
    }
    
  }

  public get f(): any {
      return this.myForm.controls;
  }

  public NavigateToRegister(){
    this.navigation.NavigateToRoute("register");
  }

  public NavigateToResetPass(){
    this.navigation.NavigateToRoute("register");
  }

  get email() { return this.myForm.get('email');    }
  get password() { return this.myForm.get('password'); }

}
