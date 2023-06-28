import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GuestAccess } from '../../models/GuestAccess.model';
import { HttpRequestsService } from '../common/http-requests.service';
import { GuestAccessEndpoints } from '../../data-access/guest-access.endpoints';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceAccessManagerService {
  constructor(private http: HttpRequestsService) { }

  public GetAllGeneralServiceAccess(name: string) : Observable<Array<GuestAccess>> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Get<GuestAccess>(GuestAccessEndpoints.GetAllGuestAccess);
  }
  
}
