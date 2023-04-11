import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/common/navigation.service';
import { menuBarData } from './menu-bar-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private navigationService: NavigationService) {

   }

   iconUserState = "../../../../assets/icons/user.svg";
    iconMenuState = "../../../../assets/icons/bars.svg";
    setShowMenu = true;

    
  navData = menuBarData;

  ngOnInit(): void {
  }

  public NavigateToLogin() {
    this.navigationService.NavigateToRoute('login');
  }


  openMenu() {
    this.setShowMenu = !this.setShowMenu;
    console.log(this.setShowMenu);
  }
}
