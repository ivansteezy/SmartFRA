import { Component, OnInit, Input } from '@angular/core';
import { menuBarData } from './menu-bar-data';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  // @Input("setShowMenu") showMenu: boolean = false;

  @Input("showMenu") setShowMenu = false;

  navData = menuBarData;
  

  constructor() { }

  ngOnInit(): void {

    console.log(this.setShowMenu);
  }

  printMenuState() {
    console.log("NOW I AM SHOWING? : ",this.setShowMenu);
  }

}
