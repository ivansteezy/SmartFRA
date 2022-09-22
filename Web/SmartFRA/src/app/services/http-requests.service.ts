import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  constructor(private http: HttpClient) { }

  public Get<T>(endpoint: string, params: string = "") : Observable<Array<T>> {
    return this.http.get<Array<T>>(endpoint + '/posts');
  }

}
