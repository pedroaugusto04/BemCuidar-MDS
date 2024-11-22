import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { Observable, of } from "rxjs";
import { User } from "../../models/User";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private readonly API = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getUserInfo(): Observable<User> {
    const apiUrl = new URL(environment.getApiUsersInfo, this.API).toString();
    return this.httpClient.get<User>(apiUrl);
  }

  favoriteProvider(providerId: string) {
    const apiUrl = new URL(
      environment.getApiFavoriteProvider(providerId),
      this.API
    ).toString();
   return this.httpClient.post(apiUrl,"");
  }

  unfavoriteProvider(providerId: string) {
    const apiUrl = new URL(
      environment.getApiFavoriteProvider(providerId),
      this.API
    ).toString();
    return this.httpClient.delete(apiUrl);
  }
}
