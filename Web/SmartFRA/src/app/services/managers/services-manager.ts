import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Services } from '../../models/Services.model';
import { HttpRequestsService } from '../common/http-requests.service';
import { ServicesEndpoints } from '../../data-access/services.endpoints';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceAccessManagerService {
  constructor(private http: HttpRequestsService) { }

  public GetAllGeneralServiceAccess(name: string) : Observable<Array<Services>> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Get<Services>(ServicesEndpoints.GetAllServices);
  }
  
}
