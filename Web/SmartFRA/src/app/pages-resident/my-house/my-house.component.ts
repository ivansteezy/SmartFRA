import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/common/navigation.service';
import { CognitoService } from 'src/app/services/aws/cognito.service';
import { NgToastService } from 'ng-angular-popup';
import { HttpRequestsService } from 'src/app/services/common/http-requests.service';
import { catchError, tap } from 'rxjs';
@Component({
  selector: 'app-my-house',
  templateUrl: './my-house.component.html',
  styleUrls: ['./my-house.component.scss']
})
export class MyHouseComponent implements OnInit {

  currentIdUser : string = "";
  currentIdHouse : string = "";
  visitsResult: any[] =  [];

  constructor(private navigationService: NavigationService, private toast: NgToastService,private cognitoService: CognitoService, private http: HttpRequestsService) { 

    this.getIdUser();
    
  }

  getFamily(){
    console.log(this.currentIdHouse);
    this.http.Get(`http://localhost:3000/resident/ResidentByHouse/${this.currentIdHouse}`)
  .pipe(
    tap((res) => {
      this.toast.success({ detail: "Solicitud exitosa", summary: "Solicitud GET ALL HOUSES realizada", duration: 5000 });
      
      this.visitsResult = res;
      console.log(this.visitsResult);

    }),
    catchError((error) => {
      this.toast.error({ detail: "Error en la solicitud", summary: "Ocurrió un error, inténtelo de nuevo más tarde.", duration: 5000 });
      throw error;
    })
  )
  .subscribe();
  }

  getIdUser(){
    const email = sessionStorage.getItem("emailUser");

    this.http.Get(`http://localhost:3000/resident/ResidentByEmail/%27${email}%27`)
  .pipe(
    tap((res : any) => {
      this.toast.success({ detail: "Solicitud exitosa", summary: "Solicitud GET ALL HOUSES realizada", duration: 5000 });
      // console.log(res[0].idResidents);

      this.currentIdUser = res[0].idResidents;
      this.currentIdHouse = res[0].idHouse;
      console.log(this.currentIdUser, this.currentIdHouse);

      this.getFamily();

    }),
    catchError((error) => {
      this.toast.error({ detail: "Error en la solicitud", summary: "Ocurrió un error, inténtelo de nuevo más tarde.", duration: 5000 });
      throw error;
    })
  )
  .subscribe();
  }

  ngOnInit(): void {
  }

}
