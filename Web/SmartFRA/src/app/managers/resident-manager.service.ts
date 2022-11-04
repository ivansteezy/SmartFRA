import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resident } from '../models/resident.model';
import { HttpRequestsService } from '../services/common/http-requests.service';
import { ResidentEndpoints } from '../data-access/resident.endpoints';

@Injectable({
  providedIn: 'root'
})
export class ResidentManagerService {
  constructor(private http: HttpRequestsService) { }

  public GetResidentById(id: number) : Observable<Array<Resident>> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Get<Resident>(ResidentEndpoints.GetResidentById);
  }

  // to do: expand this service functionality for all the data that we need in all the databases.
}
