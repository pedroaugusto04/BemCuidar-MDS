import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { Observable, map } from "rxjs";
import { ServiceProvider } from "../../models/ServiceProvider";
import { ServiceRequest } from "../../models/ServiceRequest";
import { UserRequestStatus } from "../../models/enums/UserRequestStatus";

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

  /**
   * @param providerId O id do cuidador que sera pedido
   * @param newRequest O pedido em si. Os valores id, user_id, provider_id, create_time
   * e status serao ignorados, pois sao determinados por outras partes do sistema
   * (Ver o modelo ServiceRequest em src/app/models/ServiceRequest.ts)
   * @returns 1 se for ok, 0 se der algo de errado
   */
  requestProvider(providerId: string, newRequest: FormData): Observable<boolean> {
    const apiUrl = new URL(
      environment.postApiRequestProvider(providerId),
      this.API
    ).toString();

    return this.httpClient
      .post(apiUrl, newRequest, { observe: "response" })
      .pipe(map((response) => response.status === 200));
  }

  // recebe todos os pedidos ao anuncio do usuario que esta logado
  getRequests(): Observable<ServiceRequest[]>{
    const apiUrl = new URL(
      environment.getApiServiceRequests,
      this.API
    ).toString();
    return this.httpClient.get<ServiceRequest[]>(apiUrl);
  }

  // recebe um pedido especifico ao anuncio do usuario que esta logado
  getRequestById(requestId: string): Observable<ServiceRequest>{
    const apiUrl = new URL(
      environment.getApiServiceRequest(requestId),
      this.API
    ).toString();
    return this.httpClient.get<ServiceRequest>(apiUrl);
  }

  // seta o status do pedido especificado por requestid com o valor de status
  setRequestStatus(requestId: string, status: UserRequestStatus): Observable<boolean>{
    const apiUrl = new URL(
      environment.putApiRequestStatus(requestId),
      this.API
    ).toString();
    return this.httpClient
      .put<boolean>(apiUrl, { "status": status }, { observe: "response" })
      .pipe(map((response) => response.status === 200));
  }
  
  getProviderAnnouncements(): Observable<ServiceProvider[]> {
    const apiUrl = new URL(environment.getApiProviderAnnouncements, this.API).toString();
    return this.httpClient.get<ServiceProvider[]>(apiUrl);
  }
}
