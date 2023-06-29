import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NavigationService } from 'src/app/services/common/navigation.service';
import { NgToastService } from 'ng-angular-popup';
import { CognitoService } from 'src/app/services/aws/cognito.service';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-visitas-admin',
  templateUrl: './visitas-admin.component.html',
  styleUrls: ['./visitas-admin.component.scss']
})
export class VisitasAdminComponent implements OnInit {

  currentContentHouses : string = "main-menu";
  formRegisterVisit!:FormGroup;
  visitsResult: any[] = [];

  constructor(private fb:FormBuilder, private toast: NgToastService, private http: HttpRequestsService) { 
    this.crearFormularioRegister();
  }

  ngOnInit(): void {

    // here's gonna try to add the get houses api
    this.getInfoVisits();

  }

getInfoVisits(){
  this.http.Get(`http://localhost:3000/house/AllHouses`)
  .pipe(
    tap((res) => {
      this.toast.success({ detail: "Solicitud exitosa", summary: "Solicitud GET ALL HOUSES realizada", duration: 5000 });
      console.log(res);
      this.visitsResult = res;
      console.log(this.visitsResult)
    }),
    catchError((error) => {
      this.toast.error({ detail: "Error en la solicitud", summary: "Ocurrió un error, inténtelo de nuevo más tarde.", duration: 5000 });
      throw error;
    })
  )
  .subscribe();
}
  
public insertVisit() {
  let dataHouse = {
    address: this.formRegisterVisit.getRawValue().address,
    numberHouse: this.formRegisterVisit.getRawValue().numberHouse,
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
    this.formRegisterVisit = this.fb.group({
        address: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        numberHouse: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
    })
  }


  registerVisit(){
    console.log(this.formRegisterVisit);
    // Invalid -> mark all as touched to be invalid
    if(this.formRegisterVisit.invalid){
      return Object.values(this.formRegisterVisit.controls).forEach(controls=>{
        controls.markAllAsTouched();
        controls.markAsDirty();
        console.log("Formulario invalido");
        this.toast.error({detail:"Registro incorrecto",summary:'Ingresa informacion valida.',duration:3000});
      })
    }else{
      console.log("Enviado!",this.formRegisterVisit.value);

      //HTTP Request
      this.insertVisit();

    }
   
}


}
