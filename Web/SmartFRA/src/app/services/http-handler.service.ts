import { Injectable } from '@angular/core';
import { retryWhen, mergeMap } from 'rxjs/operators';
import { Observable, timer, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HTTP_HEADERS        = new HttpHeaders({'content-type': 'application/json', 'access-control-allow-origin': '*'});
const RETRY_ATTEMPTS      = 5
const RETRY_STATUS_CODES  = [ 400 ];
const RETRY_MILLISECONDS  = 5000

@Injectable({ providedIn: 'root'})
export class HttpHandlerService {
  constructor(private http: HttpClient) { }
  
  public Get(endpoint: string, displayErrors: boolean = true) : Observable<JSON> {
    return this.ProcessHttpRequest(this.http.get<JSON>(endpoint, { headers: HTTP_HEADERS }), displayErrors);
  }

  public Delete(endpoint: string, displayErrors: boolean = true) : Observable<JSON> {
    return this.ProcessHttpRequest(this.http.delete<JSON>(endpoint, { headers: HTTP_HEADERS }), displayErrors);
  }

  public Post(endPoint: string, body: object, displayErrors: boolean = true) : Observable<JSON> {
    return this.ProcessHttpRequest(this.http.post<JSON>(endPoint, body, {headers: HTTP_HEADERS}), displayErrors);
  }

  public Patch(endPoint: string, body: object, displayErrors: boolean = true): Observable<any> {
    return this.ProcessHttpRequest(this.http.patch<JSON>(endPoint, body, { headers: HTTP_HEADERS }), displayErrors)
  }

  public Put(endPoint: string, body: object, displayErrors: boolean = true): Observable<any> {
    return this.ProcessHttpRequest(this.http.put<JSON>(endPoint, body, { headers: HTTP_HEADERS }), displayErrors)
  }

  private ProcessHttpRequest(httpRequest: Observable<JSON>, displayErrors: boolean = true): Observable<JSON> {
    return httpRequest.pipe(retryWhen(errorResponse => {
      return this.RetryOnConnectionError(errorResponse, displayErrors);
    }));
  }

  private RetryOnConnectionError(errorResponse: Observable<any>, displayErrors: boolean = true): Observable<any> {
    return errorResponse.pipe(mergeMap((error, retryAttempts) => {

      if(retryAttempts >= RETRY_ATTEMPTS || !RETRY_STATUS_CODES.find(code => error.status == code)) {
        return throwError(() => new Error(error));
      }

      if(displayErrors) {
        console.log(`Connection lost. Retrying in ${RETRY_MILLISECONDS/1000} seconds...`, 1000);
      }

      return timer(RETRY_MILLISECONDS);
    }));
  }
}
