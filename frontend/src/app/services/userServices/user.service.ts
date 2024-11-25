import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { UserRequest } from "../../models/UserRequest";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private readonly API = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  favoriteProvider(providerId: string) {
    const apiUrl = new URL(
      environment.getApiFavoriteProvider(providerId),
      this.API
    ).toString();
    return this.httpClient.post(apiUrl, "");
  }

  unfavoriteProvider(providerId: string) {
    const apiUrl = new URL(
      environment.getApiFavoriteProvider(providerId),
      this.API
    ).toString();
    return this.httpClient.delete(apiUrl);
  }

  getUserRequests(): Observable<UserRequest[]> {
    const apiUrl = new URL(environment.getApiUserRequests, this.API).toString();
    return this.httpClient.get<UserRequest[]>(apiUrl);
  }
}
