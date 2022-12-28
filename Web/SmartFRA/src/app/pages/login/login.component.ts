import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NavigationService } from 'src/app/services/common/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private navigation: NavigationService, private fb: FormBuilder) {
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
      return;
    } else {
      alert('Form is going to be send');
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
