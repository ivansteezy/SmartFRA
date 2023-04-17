import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/common/navigation.service';
import { menuBarData } from './menu-bar-data';

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

  constructor(private navigationService: NavigationService) {

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
