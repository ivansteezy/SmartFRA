import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register-resident',
  templateUrl: './register-resident.component.html',
  styleUrls: ['./register-resident.component.scss']
})
export class RegisterResidentComponent implements OnInit {

  formRegister!:FormGroup;

  constructor(private fb:FormBuilder) {}

  crearFormulario(){
    this.formRegister = this.fb.group({
      
    })
  }


  ngOnInit(): void {
  }

}
