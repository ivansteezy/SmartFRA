import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resident } from '../models/resident.model';
import { HttpRequestsService } from '../services/http-requests.service';

@Injectable({
  providedIn: 'root'
})
export class ResidentManagerService {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com'
  constructor(private http: HttpRequestsService) { }

  public GetResidentById(id: number) : Observable<Array<Resident>> {
    // call http requests service for a GET for the resident by id endpoint

    return this.http.Get<Resident>(this.ROOT_URL);
  }
}
