import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http: HttpClient) { }

  sendScanUrl(url: string) {
    return this.http.post('localhost:8080' + '/api/v1/analyze', url)
    console.log('yay');
  }
  getScanStatus() {
    return this.http.get(environment.apiUrl + "/api/v1/analyze");
  }
  getScanResult() {
    return this.http.get(environment.apiUrl + "/api/v1/getScanResults");
  }
}
