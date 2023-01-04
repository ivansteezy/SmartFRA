import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NavigationService } from 'src/app/services/common/navigation.service';
import { NgToastService } from 'ng-angular-popup';
import { CognitoService } from 'src/app/services/aws/cognito.service';

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
    private fbV: FormBuilder,
    private toast: NgToastService,
    private cognitoService: CognitoService
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
      code: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
    });
  }

  async ngOnInit() {

  }

  public VerifyUser(){
    let data = {
      email: this.myForm.getRawValue().email,
      verificationCode: this.myFormValidation.getRawValue().code
    }

    this.cognitoService.VerifyUser(data).then(res => {
      this.toast.success({detail:"Usuario verificado.",summary:'Tu cuenta ha sido verificada exitosamente.',duration:5000});
      this.navigation.NavigateToRoute('login');
    }).catch(error => {
      console.log(error);
      this.toast.error({detail:"Error de verificacion",summary:'Introduce un código válido.',duration:5000});
    })
  }

  public RegisterUser(){
    let data = {
      email: this.myForm.getRawValue().email,
      password: this.myForm.getRawValue().password,
      names: this.myForm.getRawValue().name,
      lastNames: this.myForm.getRawValue().lastName,
      phoneNumber: this.myForm.getRawValue().phoneNumber
    }

    console.log('Insertando: '+data);

    this.cognitoService.SignUpUser(data).then(res => {
      console.log(res) 
      this.show = true; //Mandar la señal de abrir el modal
    }).catch(error => {
      console.log(error)
    })

  }

    // submit method
    public SubmitForm() {
      if (this.myForm.invalid) {
        console.log('Form invalid');
        this.toast.error({detail:"Error de registro",summary:'Introduce tu informacion correctamente.',duration:5000});      
        return;
  
      } else {
        // Get form values ​​as an object
        // const formValues = this.myForm.value;
        // Get form values ​​without converting them to an object
        const rawFormValues = this.myForm.getRawValue();
  
  
        // function de registro
        this.RegisterUser(); // activate modal
      }
    }
  
    public SubmitFormValidation() {
      // Only if modal is active:
      if (this.show) {
        if (this.myFormValidation.invalid) {
          console.log(
            'No has ingresado un codigo valido, asi que no te puedo registrar'
          );
  
          this.toast.error({detail:"Codigo Incorrecto",summary:'No has ingresado un codigo valido.',duration:5000});       
  
        } else {
          this.VerifyUser();
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
    this.toast.info({detail:"Código Reenviado",summary:'Por favor revisa tu correo.',duration:5000});
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
