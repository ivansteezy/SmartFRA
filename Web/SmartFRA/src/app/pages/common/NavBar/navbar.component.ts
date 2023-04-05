import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  iconUserState = "../../../../assets/icons/user.svg";
  iconMenuState = "../../../../assets/icons/bars.svg";
  setShowMenu = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  openMenu() {
    this.setShowMenu = !this.setShowMenu;
    console.log(this.setShowMenu);
  }

}
