import { Component, OnInit } from '@angular/core';
import { CognitoService, SignUserData } from 'src/app/services/cognito.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  newUser: SignUserData = {
      email: 'network.9961@gmail.com',
      password: 'Hola123!',
      names: 'Ivan Oswaldo',
      lastNames: 'Ayala Martinez',
      phoneNumber: '+523313204836'
  }

  constructor(private cognito: CognitoService) { }

  ngOnInit(): void {
  }

  public NavigateToDashBoard() {
    // this.navigationService.NavigateToRoute('dashboard');

    this.cognito.SignUpUser(this.newUser).then(res => {
      console.log('usuario creado network.9961@gmail.com por favor valide su usuario!', res);
    }).catch(err => {
      console.error('Error al registrar usuario', err);
    });
  }
}
