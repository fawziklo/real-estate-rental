import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ILogin } from "../models/login";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  API_SERVER = "http://localhost:3001";

  constructor(private httpClient: HttpClient) {

  }

  sendUserLogin(userLogin: ILogin): Observable<ILogin> {
    return this.httpClient.post<ILogin>(this.API_SERVER + '/authentication', userLogin)
  }

}
