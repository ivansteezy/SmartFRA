import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from 'src/app/services/http-handler.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private navigationService: NavigationService,
              private httpService: HttpHandlerService) { }

  ngOnInit(): void {
  }

  public NavigateToDashBoard() {
    this.navigationService.NavigateToRoute('dashboard');
  }

  public MakeRequest() {
    this.httpService.Get('https://httpbin.org/anything', true).subscribe((res: any) => {
      console.log('Method', res.method);
    }, err => {
      console.log('Error fetching data!');
    });
  }
}
