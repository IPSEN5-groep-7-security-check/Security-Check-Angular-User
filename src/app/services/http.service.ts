import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Scan } from '../util/scan';
import { Test } from '../util/test';

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
}
