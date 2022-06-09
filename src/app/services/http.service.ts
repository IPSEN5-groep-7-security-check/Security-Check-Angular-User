import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Scan } from '../util/scan';
import { Test } from '../util/test';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  constructor(private http: HttpClient) {}

  tempHost?: string;

  startScan(host: string, rescan: boolean | null) {
    this.tempHost = host;
    return this.http
      .post<Scan>(environment.apiUrl + '/api/v1/analyze', null, {
        params: {
          host: host,
          rescan: rescan ? 'true' : 'false',
        },
      })
      .pipe(catchError(this.handleError));
  }

  getScanStatus(host: string) {
    return this.http.get<Scan>(environment.apiUrl + '/api/v1/analyze', {
      params: {
        host: host,
      },
    });
  }

  /*   Each scan consists of a variety of subtests, including Content Security
  Policy, Subresource Integrity, etc. The results of all these tests can be
  retrieved once the scan's state has been placed in the FINISHED state. It
  will return a single tests object. */
  getScanResult(scanId: number) {
    return this.http.get<Test>(environment.apiUrl + '/api/v1/getScanResults', {
      params: {
        scan: scanId,
      },
    });
  }

  sendmail(user: { name: any; email: any; host: any }) {
    console.log(user);
    return this.http.post(environment.apiUrl + '/sendemail', user);
  }

  // sendmail(user: { name: any; email: any; host: any }) {
  //   console.log(user);
  //   const encJsonUser = this.rsaHelper.encryptWithPublicKey(
  //       JSON.stringify(user)
  //   );
  //   console.log(encJsonUser);
  //   return this.http.post(environment.apiUrl + '/sendemail', encJsonUser);
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
