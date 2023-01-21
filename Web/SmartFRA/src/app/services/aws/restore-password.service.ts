import { Injectable } from '@angular/core';
import * as Cognito from './cognito.service';
import * as AWSCognito from 'amazon-cognito-identity-js';

@Injectable({ providedIn: 'root' })
export class RestorePasswordService {

  constructor() { }

  public SendRestorePasswordCode(email: string) {
    return new Promise((resolved, rejected) => {
      const userPoolData = new AWSCognito.CognitoUserPool(Cognito.PoolData);
      const cognitoUser = new AWSCognito.CognitoUser({
        Username: email,
        Pool: userPoolData
      });

      cognitoUser.forgotPassword({
        onSuccess: result => {
          console.info('Restore password code sended!');
          resolved(result);
        },
        onFailure: err => {
          console.error('Error sending restore password code!');
          rejected(err);
        }
      });
    });
  }

  public VerifyRestorePasswordCode(userData: Cognito.RestorePasswordData) {
    return this.RestorePassword(userData).then((result) => {
      console.info('Tu contrasenia ha sido actualizada correctamente');
    }).catch(error => {
      console.error('Error actualizando contrasenia: ', error);
    });
  }

  private RestorePassword(userData: Cognito.RestorePasswordData) {
    return new Promise((resolved, rejected) => {
      const userPoolData = new AWSCognito.CognitoUserPool(Cognito.PoolData);
      const cognitoUser = new AWSCognito.CognitoUser({
        Username: userData.email,
        Pool: userPoolData
      });

      cognitoUser.confirmPassword(userData.verificationCode, userData.password, {
        onSuccess: success => {
          console.info('Password changed successfully!');
          resolved(success);
        },
        onFailure: err => {
          rejected(err);
        }
      });
    });
  }
}
