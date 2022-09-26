import { Component, OnInit } from '@angular/core';
import { CognitoService, SignUserData, VerifyUserData } from 'src/app/services/cognito.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
