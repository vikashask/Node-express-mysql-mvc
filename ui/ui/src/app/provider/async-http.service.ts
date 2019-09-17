import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, finalize } from 'rxjs/operators';

import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class AsyncHttpService {

  constructor(private httpClient: HttpClient, private spinner: NgxSpinnerService) { }

  get(url: string, options?: Object): Observable<any> {
    this.spinner.show();
    return this.httpClient.get(url, options)
      .pipe(
        catchError(this.handleError(url))
      ).pipe(
        finalize(() => { 
          this.spinner.hide();
        })
      );
  }

  post(url: string, data: Object, options?: Object): Observable<any> {
    return this.httpClient.post(url, data, options)
      .pipe(
        catchError(this.handleError(url))
      ).pipe(
        finalize(() => { this.spinner.hide();})
      );
  }

  put(url: string, data: Object, options?: Object): Observable<any> {
    return this.httpClient.put(url, data, options)
      .pipe(
        catchError(this.handleError(url))
      ).pipe(
        finalize(() => { this.spinner.hide();})
      );
  }

  delete(url: string, options?: Object): Observable<any> {
    return this.httpClient.delete(url, options)
      .pipe(
        catchError(this.handleError(url))
      ).pipe(
        finalize(() => { this.spinner.hide();})
      );
  }

  private handleError<T>(url = 'url', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }
}
