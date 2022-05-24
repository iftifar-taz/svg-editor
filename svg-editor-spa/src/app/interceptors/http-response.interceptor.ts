import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { DataStoreService } from '../services/data-store.service';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {

  constructor(private dataStoreService: DataStoreService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.dataStoreService.isLoading$.next(true);
    return next.handle(request).pipe(
      catchError((err, source) => this.onCatchError(err)),
      finalize(() => {
        this.dataStoreService.isLoading$.next(false);
      })
    );
  }

  private onCatchError(error: HttpErrorResponse): Observable<never> {
    switch (error.status) {
      case 400:
        console.log(error.error);
        break;
      case 401:
        console.log('Unauthorized');
        break;
      case 403:
        console.log('Forbidden');
        break;
      case 404:
        console.log('Not Found');
        break;
      case 500:
        console.log('Server Error');
        break;
    }

    return throwError(() => new Error(error.error));
  }
}
