import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http: HttpClient) { }

  login (data: Login) {
    this.http.post<LoginResponse>(environment.userApiUrl + "/login", body).subscribe(data => {
      this.setSession(data)
    })

    return this.isLoggedIn
  }
}
