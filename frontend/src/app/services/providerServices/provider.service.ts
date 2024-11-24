import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { Observable, map } from "rxjs";
import { ServiceProvider } from "../../models/ServiceProvider";

@Injectable({
  providedIn: "root",
})
export class ProviderService {
  private readonly API = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getProviders(): Observable<ServiceProvider[]> {
    const apiUrl = new URL(environment.getApiProviders, this.API).toString();
    return this.httpClient.get<ServiceProvider[]>(apiUrl);
  }
  getFavoritedProviders(): Observable<ServiceProvider[]> {
    const apiUrl = new URL(
      environment.getApiFavoritedProviders,
      this.API
    ).toString();
    return this.httpClient.get<ServiceProvider[]>(apiUrl);
  }

  requestProvider(providerId: string): Observable<boolean> {
    const apiUrl = new URL(
      environment.getApiRequestProvider(providerId),
      this.API
    ).toString();

    return this.httpClient
      .post(apiUrl, {}, { observe: "response" })
      .pipe(map((response) => response.status === 200));
  }
}
