import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResidentEvent } from '../../models/Event.model';
import { HttpRequestsService } from '../common/http-requests.service';
import { ResidentEventEndpoints } from '../../data-access/resident-event.endpoints';

@Injectable({
  providedIn: 'root'
})
export class ResidentEventManagerService {
  constructor(private http: HttpRequestsService) { }

  public GetAllGeneralServiceAccess(name: string) : Observable<Array<ResidentEvent>> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Get<ResidentEvent>(ResidentEventEndpoints.GetAllResidentEvents);
  }

  public InsertResident(name: string, body: ResidentEvent) : Observable<ResidentEvent> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Post<ResidentEvent>(ResidentEventEndpoints.InsertResidentEvent, body);
  }
  
}
