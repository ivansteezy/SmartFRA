import { Injectable } from '@angular/core';
import { HttpRequestsService } from '../common/http-requests.service';
import { Resident } from '../../models/resident.model';
import { ResidentEndpoints } from '../../data-access/resident.endpoints'

@Injectable({
  providedIn: 'root'
})
export class ResidentManagerService {

  constructor(private http: HttpRequestsService) { }

  InsertResident(residentToInsert: Resident) {
    return this.http.Post(ResidentEndpoints.InsertResident, residentToInsert);
  }

  ModifyResident(name: string) {

  }

  GetResident(name: string) {

  }

  DeleteResident(name: string) {

  }
}
