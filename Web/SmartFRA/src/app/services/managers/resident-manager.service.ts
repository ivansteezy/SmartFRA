import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resident } from '../../models/resident.model';
import { HttpRequestsService } from '../common/http-requests.service';
import { ResidentEndpoints } from '../../data-access/resident.endpoints';

@Injectable({
  providedIn: 'root'
})
export class ResidentManagerService {
  constructor(private http: HttpRequestsService) { }

  public GetAllResidents(name: string) : Observable<Array<Resident>> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Get<Resident>(ResidentEndpoints.GetAllResidents);
  }

  public GetResidentById(name: string) : Observable<Array<Resident>> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Get<Resident>(ResidentEndpoints.GetResidentById);
  }

  public GetResidentByName(name: string) : Observable<Array<Resident>> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Get<Resident>(ResidentEndpoints.GetResidentByName);
  }

  public InsertResident(name: string, body: Resident) : Observable<Resident> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Post<Resident>(ResidentEndpoints.InsertResident, body);
  }
  
}
