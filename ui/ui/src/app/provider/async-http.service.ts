import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, finalize } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AsyncHttpService {

  constructor(private httpClient: HttpClient) { }

  get(url: string, options?: Object): Observable<any> {
    return this.httpClient.get(url, options)
      .pipe(
        catchError(this.handleError(url))
      ).pipe(
        finalize(() => { console.log('completed') })
      );
  }

  post(url: string, data: Object, options?: Object): Observable<any> {
    return this.httpClient.post(url, data, options)
      .pipe(
        catchError(this.handleError(url))
      ).pipe(
        finalize(() => { console.log('completed') })
      );
  }

  put(url: string, data: Object, options?: Object): Observable<any> {
    return this.httpClient.put(url, data, options)
      .pipe(
        catchError(this.handleError(url))
      ).pipe(
        finalize(() => { console.log('completed') })
      );
  }

  delete(url: string, options?: Object): Observable<any> {
    return this.httpClient.delete(url, options)
      .pipe(
        catchError(this.handleError(url))
      ).pipe(
        finalize(() => { console.log('completed') })
      );
  }

  private handleError<T>(url = 'url', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }
}
