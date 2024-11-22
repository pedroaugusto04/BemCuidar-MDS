import { Injectable } from "@angular/core";
import { User } from "../../models/User";
import { Observable, of } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  
  private readonly API = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  save(user : User): Observable<User> {
    const apiUrl = new URL(environment.getApiUsers, this.API).toString();
    return this.httpClient.post<User>(apiUrl, user);
  }
}
