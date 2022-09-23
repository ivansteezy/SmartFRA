import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResidentManagerService } from 'src/app/managers/resident-manager.service';
import { Resident } from 'src/app/models/resident.model';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private navigationService: NavigationService,
                     private residentManager: ResidentManagerService) { }

  public posts: Array<Resident> = new Array<Resident>();
  
  ngOnInit(): void {
  }

  public NavigateToDashBoard() {
    this.navigationService.NavigateToRoute('dashboard');
  }
}
