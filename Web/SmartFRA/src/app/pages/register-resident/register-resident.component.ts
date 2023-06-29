import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Integer } from 'aws-sdk/clients/apigateway';
import { NgToastService } from 'ng-angular-popup';
import { catchError, tap } from 'rxjs';
import { HttpRequestsService } from 'src/app/services/common/http-requests.service';
import { NavigationService } from 'src/app/services/common/navigation.service';
import { CognitoService } from 'src/app/services/aws/cognito.service';


@Component({
  selector: 'app-register-resident',
  templateUrl: './register-resident.component.html',
  styleUrls: ['./register-resident.component.scss'],
  providers: [ReactiveFormsModule, FormsModule]
})

export class RegisterResidentComponent implements OnInit {

  formRegister!:FormGroup;
  formValidation!:FormGroup;
  ageNumber!:Integer;
  faceModelTest!:String;

  show = false;

  constructor(
    private navigation: NavigationService,
    private cognitoService: CognitoService,
    private fb:FormBuilder,
    private fVb:FormBuilder, 
    private toast: NgToastService, 
    private http: HttpRequestsService) {
    this.crearFormulario();
    this.crearFormularioValidacion();
    this.ageNumber = 0;
    this.faceModelTest = "Pitaya.xml";
  }

  get nameResidentNoValid(){
    return this.formRegister.get('residentName')?.invalid && this.formRegister.get('residentName')?.touched;
  }

  get lastNameNoValid(){
    return this.formRegister.get('lastName')?.invalid && this.formRegister.get('lastName')?.touched;
  }

  get motherLastNameNoValid(){
    return this.formRegister.get('motherLastName')?.invalid && this.formRegister.get('motherLastName')?.touched;
  }

  get ageNoValid(){
    return (this.formRegister.get('age')?.invalid && this.formRegister.get('age')?.dirty )|| (this.formRegister.get('age')?.invalid && this.formRegister.get('age')?.touched);
  }

  get idHouseNoValid(){
    return this.formRegister.get('idHouse')?.invalid && this.formRegister.get('idHouse')?.touched;
  }

  get platesNoValid(){
    return this.formRegister.get('plates')?.invalid && this.formRegister.get('plates')?.touched;
  }

  get telephoneNoValid(){
    return this.formRegister.get('telephone')?.invalid && this.formRegister.get('telephone')?.touched;
  }

  get emailNoValid(){
    return this.formRegister.get('email')?.invalid && this.formRegister.get('email')?.touched;
  }

  get passwordNoValid(){
    return this.formRegister.get('password')?.invalid && this.formRegister.get('password')?.touched;
  }

  get codeNoValid(){
    return this.formRegister.get('password')?.invalid && this.formRegister.get('password')?.touched;
  }

  // get faceIdNoValid(){
  //   return this.formRegister.get('faceId')?.invalid && this.formRegister.get('faceId')?.touched;
  // }

  crearFormulario(){
    this.formRegister = this.fb.group({
        residentName: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        lastName: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        motherLastName: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        age: ['',[Validators.required, Validators.pattern(/^[0-9]+$/)]],
        idHouse:['',[Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/)]],
        plates: ['',[Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/)]],
        telephone: ['',[Validators.required, Validators.pattern(/^((\d{10})|(\d{13}))$/)]],
        email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
        password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/)]],
        // faceModel: ['',[Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/)]],
    })
  }

  crearFormularioValidacion(){
    this.formValidation = this.fVb.group({
      code: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
    });
  }

ngOnInit(): void {
}

chargeModelTest(){
  console.log("setting to dirty model...");
  
  this.formRegister.get('faceModel')?.markAsDirty;
  this.formRegister.get('faceModel')?.setValue("test.xml");
  console.log(this.formRegister.get('faceModel')?.status);
}


ResendCode(){

}

public postRegister() {

  let dataUser = {
    residentName:  this.formRegister.getRawValue().residentName,
    lastName:  this.formRegister.getRawValue().lastName,
    motherLastName:  this.formRegister.getRawValue().motherLastName,
    age:  this.formRegister.getRawValue().age,
    idHouse: this.formRegister.getRawValue().idHouse,
    plates:  this.formRegister.getRawValue().plates,
    telephone:  this.formRegister.getRawValue().telephone,
    faceModel:  this.faceModelTest,
    email: this.formRegister.getRawValue().email
  }

  this.http.Post('http://localhost:3000/resident/ResidentRegistry', dataUser)
    .pipe(
      tap(() => {
        this.toast.success({detail:"Registro exitoso",summary:'Nuevo usuario añadido!',duration:5000});
        this.limpiar();
      }),
      catchError((error) => {
        this.toast.error({detail:"Error de Registro",summary:'Ocurrio un error, intente mas tarde.',duration:5000});
        throw error;
      })
    )
    .subscribe();

}

guardar(){
  
    console.log(this.formRegister);

    // Invalid -> mark all as touched to be invalid
    if(this.formRegister.invalid){
      return Object.values(this.formRegister.controls).forEach(controls=>{
        controls.markAllAsTouched();
        controls.markAsDirty();
        console.log("Formulario invalido");
        this.toast.error({detail:"Datos incorrectos",summary:'Ingresa informacion valida.',duration:3000});
      })
    }else{
      console.log("Enviado!",this.formRegister.value);

      //HTTP Request
      this.SubmitForm();

    }

}

limpiar(){
  this.formRegister.reset();
  this.toast.info({detail:"Limpio!",summary:'Formulario reiniciado',duration:3000});
}

incrementAge(){
  console.log("Mas mas");
  if(this.formRegister.get('age')?.invalid){
    this.ageNumber = 0;
  }

  this.ageNumber = this.ageNumber + 1;
  this.formRegister.get('age')?.setValue(this.ageNumber);
}

decrementAge(){
  console.log("Mas menoss");

  if(this.formRegister.get('age')?.invalid){
    this.ageNumber = 0;
  }else{
    if(this.formRegister.get('age')?.value == 0){
      this.ageNumber = 0;
    }else{
      this.ageNumber = this.ageNumber - 1;
    }
  }
  
  this.formRegister.get('age')?.setValue(this.ageNumber);
}

// -----------------------
public VerifyUser(){
  let data = {
    email: this.formRegister.getRawValue().email,
    verificationCode: this.formValidation.getRawValue().code
  }

  this.cognitoService.VerifyUser(data).then(res => {
    console.log("DATOS CORRECTOS: ",data)
    this.toast.success({detail:"Usuario verificado.",summary:'Tu cuenta ha sido verificada exitosamente.',duration:5000});
    //Se registra en BDD loacl:
    this.postRegister();
    this.show = false;
  }).catch(error => {
    console.log("DATOS NO CORRECTOS: ",data)
    this.toast.error({detail:"Error de verificacion",summary:'Introduce un código válido.',duration:5000});
  })
}

public RegisterUser(){
  let data = {
    email: this.formRegister.getRawValue().email,
    password: this.formRegister.getRawValue().password,
    names: this.formRegister.getRawValue().name,
    lastNames: this.formRegister.getRawValue().lastName,
    phoneNumber: this.formRegister.getRawValue().phoneNumber
  }

    this.cognitoService.SignUpUser(data).then(res => {
      this.show = true;
    }).catch(error => {
      this.toast.error({detail:"Error de registro",summary:'Algo salió mal, intente nuevamente más tarde.',duration:5000});  
    })
}

  public SubmitForm() {
    if (this.formRegister.invalid) {
      this.toast.error({detail:"Error de registro",summary:'Introduce tu informacion correctamente.',duration:5000});      
      return;

    } else {
      const rawFormValues = this.formRegister.getRawValue();
      this.RegisterUser(); 
    }
  }

  public SubmitFormValidation() {
    if (this.show) {
      if (this.formValidation.invalid) {
        this.toast.error({detail:"Codigo Incorrecto",summary:'No has ingresado un codigo valido.',duration:5000});       
      } else {
        this.VerifyUser();
      }
    }
  }


}
