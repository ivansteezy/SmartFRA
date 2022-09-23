import { Injectable } from '@angular/core';
import * as AWSCognito from 'amazon-cognito-identity-js'

interface AuthenticateInfo {
  userPoolData: AWSCognito.CognitoUserPool,
  authDetails:  AWSCognito.AuthenticationDetails,
  cognitoUser:  AWSCognito.CognitoUser
};

export interface UserData {
  email: string;
  password: string;
  verificationCode: string
};

export const PoolData = {
  UserPoolId: "us-west-1_ejNAMAv5c",
  ClientId: "11rjcqg1uqjka7npnftmmmcrj1"
};

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  constructor() { }

  public SignUpUser(userData: UserData) {
    return new Promise((resolved, rejected) => {
      const userPoolData = new AWSCognito.CognitoUserPool(PoolData);
      let userAttributes = new Array<AWSCognito.CognitoUserAttribute>();
      userAttributes.push(new AWSCognito.CognitoUserAttribute({Name: 'email', Value: userData.email}));

      userPoolData.signUp(userData.email, userData.password, userAttributes, [], (err, res) => {
        if (err) {
          console.error('Error Signing up user: ', userData.email);
          rejected(err);
        }
        else {
          console.info('User: ', userData.email, 'Signed up!');
          resolved(res);
        }
      });
    });
  }

  public VerifyUser(userData: UserData) {
    return new Promise((resolved, rejected) => {
      const userPoolData = new AWSCognito.CognitoUserPool(PoolData);

      const cognitoUser = new AWSCognito.CognitoUser({
        Username: userData.email,
        Pool: userPoolData
      });

      cognitoUser.confirmRegistration(userData.verificationCode, true, (err, res) => {
        if (err) {
          console.error('Error verifying user: ', userData.email);
          rejected(err);
        }
        else {
          console.info('User: ', userData.email, ' verified!');
          resolved(res);
        }
      })
    });
  }

  public AuthenticateUser(userData: UserData) {
    return new Promise((resolved, rejected) => {
      const authenticateInfo = this.ConsolidateAuthenticateInfo(userData);

      authenticateInfo.cognitoUser.authenticateUser(authenticateInfo.authDetails, {
        onSuccess: result => {
          resolved(result);
        },
        onFailure: err => {
          rejected(err);
        },
        newPasswordRequired: userAttributes => {
          userAttributes.email = userData.email;
          delete userAttributes.email_verified;

          authenticateInfo.cognitoUser.completeNewPasswordChallenge(userData.password, userAttributes,  {
            onSuccess: result => {
              console.info('User successfully authenticated!');
              resolved(result);
            },
            onFailure: error => {
              console.error('Authenticate error!');
              rejected(error);
            }
          });
        }
      });
    });
  }

  public GetLoggedUser() {
    return new Promise((resolved, rejected) => {
      const userPoolData = new AWSCognito.CognitoUserPool(PoolData);
      let cognitoUser = userPoolData.getCurrentUser();

      if (cognitoUser != null) {
        cognitoUser.getSession((err: any, res: any) => {
          if(res) {
            resolved(res.getIdToken());
          }
          else {
            rejected(err);
          }
        });
      }
    });
  }

  public SignOut(email: string): void {
    const userPoolData = new AWSCognito.CognitoUserPool(PoolData);

    const cognitoUser = new AWSCognito.CognitoUser({
      Username: email,
      Pool: userPoolData
    });
    
    cognitoUser.signOut();
    console.info('User successfully log out.');
  }

  public ResendRestorePasswordConfirmationCode(email: string) {
    return new Promise((resolved, rejected) => {
      const userPoolData = new AWSCognito.CognitoUserPool(PoolData);
      const cognitoUser = new AWSCognito.CognitoUser({
        Username: email,
        Pool: userPoolData
      });

      cognitoUser.resendConfirmationCode((err, res) => {
        if(res) {
          console.info('Restore code resended!');
          resolved(res);
        }
        else {
          console.error('An error has occured while sending restore code: ', err);
          rejected(err);
        }
      });
    });
  }

  private ConsolidateAuthenticateInfo(userData: UserData) {
    const userPoolData = new AWSCognito.CognitoUserPool(PoolData);

    const authDetails = new AWSCognito.AuthenticationDetails({
      Username: userData.email,
      Password: userData.password
    });

    const cognitoUser = new AWSCognito.CognitoUser({
      Username: userData.email,
      Pool: userPoolData
    });

    const authenticateInfo: AuthenticateInfo = {
      userPoolData: userPoolData,
      authDetails: authDetails,
      cognitoUser: cognitoUser
    };

    return authenticateInfo;
  }
}
