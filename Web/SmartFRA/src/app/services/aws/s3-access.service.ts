import * as AWS from 'aws-sdk';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class S3AccessService {

  constructor() { }

  UploadImage(image: any, imageName: any, accessToken: any) {
    return new Promise((resolve, reject) => {
      this.SetUpAwsConfiguration(accessToken);

      const s3 = new AWS.S3({
        apiVersion: "2006-03-01",
        params: { Bucket: 'bucket-name' }
      });

      const buf = Buffer.from(image, "base64");

      const data = {
        Bucket: 'filos',
        Key: imageName + '.jpg',
        Body: buf,
        ContentEncoding: "base64",
      }

      s3.putObject(data, (err, res) => {
        if(err) { reject(err);  }
        else    { resolve(res); }
      });
    });
  }

  GetAllImages(accessToken: any) {
    return new Promise((resolve, reject) => {
      this.SetUpAwsConfiguration(accessToken);

      const s3 = new AWS.S3({
        apiVersion: "2006-03-01",
        params: { Bucket: 'bucket-name' }
      });

      s3.listObjects((err, res) => {
        if(err) { reject(err);  }
        else    { resolve(res); }
      });
    });
  }

  DeleteImage(accessToken: any, imageId: any) {
    return new Promise((resolve, reject) => {
      this.SetUpAwsConfiguration(accessToken)
  
      const s3 = new AWS.S3({
        apiVersion: "2006-03-01",
        params: { Bucket: 'bucket', Key: imageId }
      });

      s3.deleteObject((err, data) => {
        if(err) { reject(err);   }
        else    { resolve(data); }
      });
    });
  }

  SetUpAwsConfiguration(accessToken: any) {
    AWS.config.region = 'placeholder-region';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'placeholder-identity',
      Logins: {
        "cognito-idp.us-east-2.amazonaws.com/us-east-2_NA4YmFIe6": accessToken
      },
    });
  }
}
