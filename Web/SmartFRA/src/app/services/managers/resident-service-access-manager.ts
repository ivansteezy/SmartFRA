import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResidentServiceAccess } from '../../models/ResidentServiceAccess.model';
import { HttpRequestsService } from '../common/http-requests.service';
import { ResidentServiceAccessEndpoints } from '../../data-access/resident-service-access.endpoints';

@Injectable({
  providedIn: 'root'
})
export class ResidentServiceAccessManagerService {
  constructor(private http: HttpRequestsService) { }

  public GetAllGeneralServiceAccess(name: string) : Observable<Array<ResidentServiceAccess>> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Get<ResidentServiceAccess>(ResidentServiceAccessEndpoints.GetAllResidentServiceAccess);
  }

  public InsertResidentServiceAccess(name: string, body: ResidentServiceAccess) : Observable<ResidentServiceAccess> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Post<ResidentServiceAccess>(ResidentServiceAccessEndpoints.InsertResidentServiceAccess, body);
  }

  public UpdateExitTime(name: string) : Observable<Array<ResidentServiceAccess>> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Get<ResidentServiceAccess>(ResidentServiceAccessEndpoints.UpdateExitTime);
  }
  
}
