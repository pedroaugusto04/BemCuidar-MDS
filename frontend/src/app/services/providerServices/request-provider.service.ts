import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ServiceProvider } from '../../models/ServiceProvider';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestProviderService {

  private readonly API = environment.baseUrl;
  
    constructor(private httpClient: HttpClient) {}
  
    requestProvider(requestData: FormData, providerId: string): Observable<ServiceProvider> { 
      const apiUrl = new URL(environment.postApiRequestProvider(providerId), this.API).toString();
      return this.httpClient.post<ServiceProvider>(apiUrl, requestData);
    }

    deleteRequest(requestId: string): Observable<void>{
      const apiUrl = new URL(environment.deleteApiRequestProvider(requestId), this.API).toString();
      return this.httpClient.delete<void>(apiUrl);
    }

    deleteAnnouncement(providerId: string): Observable<void>{
      const apiUrl = new URL(environment.deleteApiServiceProvider(providerId), this.API).toString();
      return this.httpClient.delete<void>(apiUrl);
    }

}
