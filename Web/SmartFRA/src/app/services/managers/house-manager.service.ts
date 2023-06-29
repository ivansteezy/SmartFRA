import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../../models/House.model';
import { HttpRequestsService } from '../common/http-requests.service';
import { HouseEndpoints } from '../../data-access/house.endpoints';

@Injectable({
  providedIn: 'root'
})
export class HouseManagerService {
  constructor(private http: HttpRequestsService) { }

  public GetAllHouses(name: string) : Observable<Array<House>> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Get<House>(HouseEndpoints.GetAllHouses);
  }

  public GetHouseByResident(name: string) : Observable<Array<House>> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Get<House>(HouseEndpoints.GetHouseByResident);
  }
  
  public InsertHouse(name: string, body: House) : Observable<House> {
    // call http requests service for a GET for the resident by id endpoint
    return this.http.Post<House>(HouseEndpoints.InsertHouse, body);
  }
  
}
