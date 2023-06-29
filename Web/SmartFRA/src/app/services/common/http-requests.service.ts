import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  constructor(private http: HttpClient) { }

  public Get<T>(endpoint: string, params: string = "") : Observable<Array<T>> {
    return this.http.get<Array<T>>(endpoint+params, { headers: this.GetHTTPHeaders() }); // :'D
  }

  public Post<T>(endpoint: string, body: T, params: string = "" ) : Observable<T> {
    return this.http.post<T>(endpoint, body, { headers: this.GetHTTPHeaders() });
  }

  public Put<T>(endpoint: string, body: T, params: string = "" ) : Observable<T> {
    return this.http.put<T>(endpoint, body, { headers: this.GetHTTPHeaders() });
  }

  public Patch<T>(endpoint: string, body: T, params: string = "" ) : Observable<T> {
    return this.http.patch<T>(endpoint, body, { headers: this.GetHTTPHeaders() });
  }

  public Delete<T>(endpoint: string, body: T, params: string = "" ) : Observable<T> {
    return this.http.post<T>(endpoint, { headers: this.GetHTTPHeaders() });
  }

  private GetHTTPHeaders() {
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    return new HttpHeaders(headers);
  }
}
