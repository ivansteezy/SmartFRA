import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Integer } from 'aws-sdk/clients/apigateway';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register-resident',
  templateUrl: './register-resident.component.html',
  styleUrls: ['./register-resident.component.scss'],
  providers: [ReactiveFormsModule, FormsModule]
})

export class RegisterResidentComponent implements OnInit {

  formRegister!:FormGroup;
  ageNumber!:Integer;
  faceModelTest!:String;

  constructor(private fb:FormBuilder, private toast: NgToastService) {
    this.crearFormulario();
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
        // faceModel: ['',[Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/)]],
    })
  }

ngOnInit(): void {
}

chargeModelTest(){
  console.log("setting to dirty model...");
  
  this.formRegister.get('faceModel')?.markAsDirty;
  this.formRegister.get('faceModel')?.setValue("test.xml");
  console.log(this.formRegister.get('faceModel')?.status);
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



}
