import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralServiceAccess } from '../../models/GeneralServiceAccess.model';
import { HttpRequestsService } from '../common/http-requests.service';
import { GeneralServiceAccessEndpoints } from '../../data-access/general-service-access.endpoints';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceAccessManagerService {
  constructor(private http: HttpRequestsService) { }

  public GetAllGeneralServiceAccess(name: string) : Observable<Array<GeneralServiceAccess>> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Get<GeneralServiceAccess>(GeneralServiceAccessEndpoints.GetAllGeneralServiceAccess);
  }

  public InsertGeneralServiceAccess(name: string, body: GeneralServiceAccess) : Observable<GeneralServiceAccess> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Post<GeneralServiceAccess>(GeneralServiceAccessEndpoints.InsertGeneralServiceAccess, body);
  }
  
}
