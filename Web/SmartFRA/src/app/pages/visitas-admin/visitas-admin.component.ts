import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NavigationService } from 'src/app/services/common/navigation.service';
import { NgToastService } from 'ng-angular-popup';
import { CognitoService } from 'src/app/services/aws/cognito.service';
import { catchError, tap } from 'rxjs';

import { HttpRequestsService } from 'src/app/services/common/http-requests.service';

@Component({
  selector: 'app-visitas-admin',
  templateUrl: './visitas-admin.component.html',
  styleUrls: ['./visitas-admin.component.scss']
})
export class VisitasAdminComponent implements OnInit {

  currentContentVisit : string = "main-menu";
  formRegisterVisit!:FormGroup;
  visitsResult: any[] =  [];
  viewRegisterMenu = false;

  constructor(private fb:FormBuilder, private toast: NgToastService, private http: HttpRequestsService) { 
    this.crearFormularioRegister();
  }

  ngOnInit(): void {

    // here's gonna try to add the get houses api
    this.getInfoVisits();

  }

  openRegister(){
    this.viewRegisterMenu = !this.viewRegisterMenu; 
  console.log(this.viewRegisterMenu);
}

getInfoVisits(){
  this.http.Get(`http://localhost:3000/guest/AllVisits`)
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
  let dataGuest = {
    name: this.formRegisterVisit.getRawValue().name,
    lastName: this.formRegisterVisit.getRawValue().lastName,
    plates:  this.formRegisterVisit.getRawValue().plates,
    telephone: this.formRegisterVisit.getRawValue().telephone,
    idEvent: this.formRegisterVisit.getRawValue().event
   }

   

  this.http.Post('http://localhost:3000/guest/GuestRegistry', dataGuest)
    .pipe(
      tap((resp_insert:any) => {
        this.toast.success({detail:"Registro exitoso",summary:'Nueva casa añadida!',duration:5000});

        let dataGuestAccess = {
          IdGuest: 2, 
          accessTime: this.getDate(), 
          exitTime: "" 
        }

        console.log("dataGuestAccess: ", dataGuestAccess);
  
        this.http.Post('http://localhost:3000/guest-access/GuestAccessRegistry', dataGuestAccess)
          .pipe(
            tap(() => {
              console.log("Se ha regisrado acceso correcto");
            }),
            catchError((error) => {
              console.log("NO ha regisrado acceso correcto");
              throw error;
            })
          )
          .subscribe();
        
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

  public contentChangeVisitOption(contentPage:string) {
    this.currentContentVisit = contentPage;
    console.log(contentPage);
  }

  crearFormularioRegister(){
    this.formRegisterVisit = this.fb.group({
        name: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        lastName: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        plates: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
        telephone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        event: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
    })
  }


  // get fecha actual
  getDate(){
    const fechaActual = new Date();

    const año = fechaActual.getFullYear();
    const mes = ('0' + (fechaActual.getMonth() + 1)).slice(-2); // Añade un cero inicial y asegura que tenga dos dígitos
    const día = ('0' + fechaActual.getDate()).slice(-2);
    const hora = ('0' + fechaActual.getHours()).slice(-2);
    const minutos = ('0' + fechaActual.getMinutes()).slice(-2);
    const segundos = ('0' + fechaActual.getSeconds()).slice(-2);
    
    const fechaFormateada = `${año}-${mes}-${día} ${hora}:${minutos}:${segundos}`;
    return fechaFormateada;
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

marcarSalidaVisita(idGuest:number ){
  console.log("Saldra el visitante: ", idGuest);
}


}
