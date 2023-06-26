import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Integer } from 'aws-sdk/clients/apigateway';
import { NgToastService } from 'ng-angular-popup';
import { catchError, tap } from 'rxjs';
import { HttpRequestsService } from 'src/app/services/common/http-requests.service';

@Component({
  selector: 'app-houses-admin',
  templateUrl: './houses-admin.component.html',
  styleUrls: ['./houses-admin.component.scss']
})
export class HousesAdminComponent implements OnInit {

  currentContentHouses : string = "";
  formRegisterHouse!:FormGroup;
  formSearchHouse!:FormGroup;
  ageNumber!:Integer;
  faceModelTest!:String;
  housesResult: any;

  constructor(private fb:FormBuilder, private toast: NgToastService, private http: HttpRequestsService) { 
    this.crearFormularioRegister();
    this.crearFormularioSearch();
    this.ageNumber = 0;
    this.faceModelTest = "Pitaya.xml";
  }

  ngOnInit(): void {

    // here's gonna try to add the get houses api
  }

  public contentChangeHousesOption(contentPage:string) {
    this.currentContentHouses = contentPage;
    console.log(contentPage);
  }

  crearFormularioRegister(){
    this.formRegisterHouse = this.fb.group({
        address: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        numberHouse: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
    })
  }

  crearFormularioSearch(){
    this.formSearchHouse = this.fb.group({
        idResident: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
    })
  }


  registerHouse(){
  
    console.log(this.formRegisterHouse);

    // Invalid -> mark all as touched to be invalid
    if(this.formRegisterHouse.invalid){
      return Object.values(this.formRegisterHouse.controls).forEach(controls=>{
        controls.markAllAsTouched();
        controls.markAsDirty();
        console.log("Formulario invalido");
        this.toast.error({detail:"Registro incorrecto",summary:'Ingresa informacion valida.',duration:3000});
      })
    }else{
      console.log("Enviado!",this.formRegisterHouse.value);

      //HTTP Request
      // this.postRegister();

    }
   

}



searchHouse(){
  
  console.log(this.formSearchHouse);

  // Invalid -> mark all as touched to be invalid
  if(this.formSearchHouse.invalid){
    return Object.values(this.formSearchHouse.controls).forEach(controls=>{
      controls.markAllAsTouched();
      controls.markAsDirty();
      console.log("Formulario invalido");
      this.toast.error({detail:"Registro incorrecto",summary:'Ingresa informacion valida.',duration:3000});
    })
  }else{
    console.log("Enviado!",this.formSearchHouse.value);

    //HTTP Request
    // this.postRegister();

  }
}

}
