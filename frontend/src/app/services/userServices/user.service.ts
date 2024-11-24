import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";

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
}
