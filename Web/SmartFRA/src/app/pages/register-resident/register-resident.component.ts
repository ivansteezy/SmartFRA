import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register-resident',
  templateUrl: './register-resident.component.html',
  styleUrls: ['./register-resident.component.scss'],
  providers: [ReactiveFormsModule, FormsModule]
})

export class RegisterResidentComponent implements OnInit {

  formRegister!:FormGroup;

  constructor(private fb:FormBuilder) {
    this.crearFormulario();
  }

  get nameResidentNoValid(){
    return                                                            this.formRegister.get('residentName')?.invalid && this.formRegister.get('residentName')?.touched;
  }

  get lastNameNoValid(){
    return this.formRegister.get('lastName')?.invalid && this.formRegister.get('lastName')?.touched;
  }

  get motherLastNameNoValid(){
    return this.formRegister.get('motherLastName')?.invalid && this.formRegister.get('motherLastName')?.touched;
  }

  get ageNoValid(){
    return this.formRegister.get('age')?.invalid && this.formRegister.get('age')?.touched;
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

  get faceIdNoValid(){
    return this.formRegister.get('faceId')?.invalid && this.formRegister.get('faceId')?.touched;
  }

  crearFormulario(){
    this.formRegister = this.fb.group({
        idResidents: ['0'],
        residentName: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        lastName: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        motherLastName: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        age: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        idHouse:['',[Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/)]],
        plates: ['',[Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/)]],
        telephone: ['',[Validators.required, Validators.pattern(/^((\d{10})|(\d{13}))$/)]],
        faceModel: ['',Validators.required, [Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/)]],
    })
  }

  guardar(){
    console.log(this.formRegister);
}

limpiar(){
  this.formRegister.reset();
}


  ngOnInit(): void {
  }

}
