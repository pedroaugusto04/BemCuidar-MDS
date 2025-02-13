import { Injectable } from "@angular/core";
import { ServiceProvider } from "../../models/ServiceProvider";
import { Observable, of } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RegisterProviderService {
  private readonly API = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  register(providerData: FormData): Observable<ServiceProvider> {
    const apiUrl = new URL(environment.getApiProviders, this.API).toString();
    return this.httpClient.post<ServiceProvider>(apiUrl, providerData);
  }

  update(providerData: FormData): Observable<ServiceProvider> {
    const apiUrl = new URL(environment.getApiProviders, this.API).toString();
    return this.httpClient.put<ServiceProvider>(apiUrl, providerData);
  }
}
