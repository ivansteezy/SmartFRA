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

  currentContentHouses : string = "main-menu";
  formRegisterHouse!:FormGroup;
  formSearchHouse!:FormGroup;
  ageNumber!:Integer;
  faceModelTest!:String;
  housesResul: any[] = [];

  constructor(private fb:FormBuilder, private toast: NgToastService, private http: HttpRequestsService) { 
    this.crearFormularioRegister();
    this.crearFormularioSearch();
    this.ageNumber = 0;
    this.faceModelTest = "Pitaya.xml";
  }

  ngOnInit(): void {

    // here's gonna try to add the get houses api
    this.getInfoHouses();

  }

getInfoHouses(){
  
  this.http.Get(`http://localhost:3000/house/AllHouses`)
  .pipe(
    tap((res) => {
      this.toast.success({ detail: "Solicitud exitosa", summary: "Solicitud GET ALL HOUSES realizada", duration: 5000 });
      console.log(res);
      this.housesResul = res;
      console.log(this.housesResul)

    }),
    catchError((error) => {
      this.toast.error({ detail: "Error en la solicitud", summary: "Ocurrió un error, inténtelo de nuevo más tarde.", duration: 5000 });
      throw error;
    })
  )
  .subscribe();
}
  
public insertHouse() {

  let dataHouse = {
    address: this.formRegisterHouse.getRawValue().address,
    numberHouse: this.formRegisterHouse.getRawValue().numberHouse,
  }

  this.http.Post('http://localhost:3000/house/InsertHouse/HouseRegistry', dataHouse)
    .pipe(
      tap(() => {
        this.toast.success({detail:"Registro exitoso",summary:'Nueva casa añadida!',duration:5000});
      }),
      catchError((error) => {
        this.toast.error({detail:"Error de Registro",summary:'Ocurrio un error, intente mas tarde.',duration:5000});
        throw error;
      })
    )
    .subscribe();

}

moreDataHouse(numberHouse : number){
  console.log(numberHouse);
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
      this.insertHouse();

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

  // this.http.Get(`http://localhost:3000/house/HouseByResident/${idResidents}`)
  // .pipe(
  //   tap(() => {
  //     this.toast.success({ detail: "Solicitud exitosa", summary: "Solicitud GET realizada", duration: 5000 });
  //   }),
  //   catchError((error) => {
  //     this.toast.error({ detail: "Error en la solicitud", summary: "Ocurrió un error, inténtelo de nuevo más tarde.", duration: 5000 });
  //     throw error;
  //   })
  // )
  // .subscribe();

  }
}

}
