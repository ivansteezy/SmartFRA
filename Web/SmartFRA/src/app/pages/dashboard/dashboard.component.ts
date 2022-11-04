import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/common/navigation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  public NavigateToLogin() {
    this.navigationService.NavigateToRoute('login');
  }
}
