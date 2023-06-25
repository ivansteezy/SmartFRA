import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../../models/Guest.model';
import { HttpRequestsService } from '../common/http-requests.service';
import { GuestEndpoints } from '../../data-access/guest.endpoints';

@Injectable({
  providedIn: 'root'
})
export class ResidentManagerService {
  constructor(private http: HttpRequestsService) { }

  public GetAllHouses(name: string) : Observable<Array<Guest>> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Get<Guest>(GuestEndpoints.GetAllGuests);
  }

  public GetGuestById(name: string) : Observable<Array<Guest>> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Get<Guest>(GuestEndpoints.GetGuestById);
  }
  
}