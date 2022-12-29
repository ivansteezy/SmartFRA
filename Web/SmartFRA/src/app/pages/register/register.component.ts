import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NavigationService } from 'src/app/services/common/navigation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // formGroups
  myForm: FormGroup;
  myFormValidation: FormGroup;

  show = false; // initial state of modal

  constructor(
    private navigation: NavigationService,
    private fb: FormBuilder,
    private fbV: FormBuilder
  ) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
      password: ['', [Validators.required, Validators.min(6)]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      lastName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
      ],
      telNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
          ),
        ],
      ],
    });

    this.myFormValidation = this.fbV.group({
      code: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
    });
  }

  ngOnInit(): void {}

  // submit method
  public SubmitForm() {
    if (this.myForm.invalid) {
      console.log('Form invalid');
      return;
    } else {
      // Get form values ​​as an object
      // const formValues = this.myForm.value;
      // Get form values ​​without converting them to an object
      const rawFormValues = this.myForm.getRawValue();

      this.show = true; // activate modal

      // Only if modal is active:
      if (this.show) {
        if (this.myFormValidation.invalid) {
          console.log(
            'No has ingresado un codigo valido, asi que no te puedo registrar'
          );
        } else {
          const rawFormCodeValue = this.myFormValidation.getRawValue();
          alert('Form is going to be send');
          console.log(rawFormCodeValue);
          console.log(rawFormValues);
        }
      }
    }
  }

  // convenience getter for easy access to form fields
  get f(): any {
    return this.myForm.controls;
  }

  get fV(): any {
    return this.myFormValidation.controls;
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

  get code() {
    return this.myFormValidation.get('code');
  }


  // Resend a code
  public ResendCode(){
    const email_resend = this.myForm.getRawValue().email;
    console.log("Resend code to " + email_resend);
  }

  // Navigation Functions:
  public NavigateToRegister() {
    this.navigation.NavigateToRoute('register');
  }

  public NavigateToResetPass() {
    this.navigation.NavigateToRoute('register');
  }

  public NavigateToLogin() {
    this.navigation.NavigateToRoute('login');
  }
}
