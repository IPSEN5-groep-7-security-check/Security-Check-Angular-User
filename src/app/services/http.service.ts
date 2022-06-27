import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Scan } from '../util/scan';
import { catchError, throwError } from 'rxjs';
import { RSAHelper } from '../rsaHelper';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  constructor(private http: HttpClient, private rsaHelper: RSAHelper) {}

  tempHost!: string;

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

  sendmail(user: { name: string; email: string; host: string }) {
    const encryptedUser = {
      name: this.rsaHelper.encryptWithPublicKey(user.name),
      email: this.rsaHelper.encryptWithPublicKey(user.email),
      host: this.rsaHelper.encryptWithPublicKey(user.host),
    };
    return this.http.post(environment.apiUrl + '/sendemail', encryptedUser);
  }

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
