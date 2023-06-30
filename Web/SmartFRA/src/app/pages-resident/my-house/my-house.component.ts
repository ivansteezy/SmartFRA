import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-house',
  templateUrl: './my-house.component.html',
  styleUrls: ['./my-house.component.scss']
})
export class MyHouseComponent implements OnInit {

  constructor() { }

  // getFamily(idUser: string){
  //   this.http.Get(`http://localhost:3000/house/AllHouses`)
  // .pipe(
  //   tap((res) => {
  //     this.toast.success({ detail: "Solicitud exitosa", summary: "Solicitud GET ALL HOUSES realizada", duration: 5000 });
  //     console.log(res);
  //     this.housesResul = res;
  //     console.log(this.housesResul)

  //   }),
  //   catchError((error) => {
  //     this.toast.error({ detail: "Error en la solicitud", summary: "Ocurrió un error, inténtelo de nuevo más tarde.", duration: 5000 });
  //     throw error;
  //   })
  // )
  // .subscribe();
  // }

  ngOnInit(): void {
  }

}
