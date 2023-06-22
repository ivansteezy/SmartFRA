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

  constructor(private navigationService: NavigationService, private toast: NgToastService,private cognitoService: CognitoService, private http: HttpRequestsService) {

    let apiUrl = "http://localhost:3000/resident/ResidentByEmail/"
    this.cognitoService.GetLoggedUser().then((res:any) => {
      console.log(res.payload.email);

      this.http.Get(apiUrl, `%27${res.payload.email}%27` )
      .pipe(
        tap((response) => {
         console.log("He guardado la data");
         if(JSON.stringify(response) === JSON.stringify(JSON.parse("[]"))){
          this.navigationService.NavigateToRoute('login');
         }else{
          sessionStorage.setItem('apiResponse', JSON.stringify(response));
         }
         
        }),
        catchError((error) => {
          console.log("No he guardado la data");
          throw error;
        })
      )
      .subscribe();

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

}
