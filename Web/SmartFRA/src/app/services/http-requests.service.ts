import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  constructor(private http: HttpClient) { }

  public Get<T>(endpoint: string, params: string = "") : Observable<Array<T>> {
    return this.http.get<Array<T>>(endpoint + '/posts', { headers: this.GetHTTPHeaders() });
  }

  public Post<T>(endpoint: string, body: T, params: string = "" ) : Observable<T> {
    return this.http.post<T>(endpoint + '/posts', body, { headers: this.GetHTTPHeaders() });
  }

  public Put<T>(endpoint: string, body: T, params: string = "" ) : Observable<T> {
    return this.http.put<T>(endpoint + '/posts', body, { headers: this.GetHTTPHeaders() });
  }

  public Patch<T>(endpoint: string, body: T, params: string = "" ) : Observable<T> {
    return this.http.patch<T>(endpoint + '/posts', body, { headers: this.GetHTTPHeaders() });
  }

  public Delete<T>(endpoint: string, body: T, params: string = "" ) : Observable<T> {
    return this.http.post<T>(endpoint + '/posts', { headers: this.GetHTTPHeaders() });
  }

  private GetHTTPHeaders() {
    let headers = {
      'Content-Type': 'application/json'
    };

    return new HttpHeaders(headers);
  }
}
