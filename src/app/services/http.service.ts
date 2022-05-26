import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  constructor(private http: HttpClient) {}

  startScan(host: string, rescan: boolean | null) {
    return this.http.post(environment.apiUrl + '/api/v1/analyze', null, {
      params: {
        host: host,
        rescan: rescan ? 'true' : 'false',
      },
    });
  }

  // postScanUrl(url: String) {
  //   return this.http.post('localhost:8080' + '/api/v1/analyze', url);
  // }

  getScanStatus() {
    return this.http.get(environment.apiUrl + '/api/v1/analyze');
  }
}
