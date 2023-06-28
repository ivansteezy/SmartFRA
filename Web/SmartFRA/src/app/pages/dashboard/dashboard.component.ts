import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/common/navigation.service';
import { menuBarData } from './menu-bar-data';
import { CognitoService } from 'src/app/services/aws/cognito.service';
import { NgToastService } from 'ng-angular-popup';
import { HttpRequestsService } from 'src/app/services/common/http-requests.service';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  iconUserState = "../../../../assets/icons/user.svg";
  iconMenuState = "../../../../assets/icons/bars.svg";
  setShowMenu = false;
  navData = menuBarData;
  currentContent : string = "";

  getCurrentSession(){
    if((sessionStorage.getItem("token") === null)){
      this.navigationService.NavigateToRoute('login');
    }else{
      console.log("Hay una sesion activa :D");
    }
  }

  constructor(private navigationService: NavigationService, private toast: NgToastService,private cognitoService: CognitoService, private http: HttpRequestsService) {

    this.getCurrentSession();
    
    let apiUrl = "http://localhost:3000/resident/ResidentByEmail/"
    this.cognitoService.GetLoggedUser().then((res:any) => {
      console.log(res.payload.email);
      console.log("Todo bien, guarde el correo :)");
      try{
        sessionStorage.setItem("emailUser", res.payload.email);
        sessionStorage.setItem("token", res.jwtToken);
      }catch(error){
        console.log("Woops, no he guardado la data del administrador");
        console.log(error);
      }

    }).catch((error) => {
      console.log("Oh algo ha salido mal");
      console.log(error);
    })

   }

  ngOnInit(): void {
  }

  public NavigateToLogin() {
    this.navigationService.NavigateToRoute('login');
  }


  openMenu() {
    this.setShowMenu = !this.setShowMenu;
    console.log(this.setShowMenu);
  }

  public contentChange(contentPage:string) {
    this.currentContent = contentPage;
    this.openMenu();
  }

  public closeSession() {
    console.log("si funciona el close session?");

    // Obtener el valor de sessionStorage
    let emailStorage = sessionStorage.getItem('emailUser');
    let tokenStorage = sessionStorage.getItem('token');
    
    // Verificar si el valor existe y no es null
    if ((emailStorage !== null) && (tokenStorage !== null)) {
      // Parsear el contenido JSON a un objeto JavaScript
      var emailS = emailStorage;
      //closeSession Cognito
      try{
        this.cognitoService.SignOut(emailS);
        sessionStorage.removeItem('emailUser');
        sessionStorage.removeItem('token');
        this.navigationService.NavigateToRoute('login');
      }catch(error){
        console.log("Algo ha ocurrido que no deberia al cerrar sesion");
        console.log(emailStorage, tokenStorage);
      }
    } else {
      // El valor no existe en sessionStorage o es null
      console.log('La variable no existe en sessionStorage o es null');
    }
      
    }

}
