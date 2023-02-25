import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResidentAccess } from '../../models/ResidentAccess.model';
import { HttpRequestsService } from '../common/http-requests.service';
import { ResidentAccessEndpoints } from '../../data-access/resident-access.endpoint';

@Injectable({
  providedIn: 'root'
})
export class ResidentManagerService {
  constructor(private http: HttpRequestsService) { }

  public GetAllResidentAccess(name: string) : Observable<Array<ResidentAccess>> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Get<ResidentAccess>(ResidentAccessEndpoints.GetAllResidentAccess);
  }
}
