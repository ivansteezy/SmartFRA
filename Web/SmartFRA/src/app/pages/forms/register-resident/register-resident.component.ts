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
    return this.formRegister.get('residentName')?.invalid && this.formRegister.get('residentName')?.touched;
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
