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
  
    register(providerData: FormData): Observable<ServiceProvider> { // mudar para o model do request
      const apiUrl = new URL(environment.getApiProviders, this.API).toString(); // mudar para url do request
      return this.httpClient.post<ServiceProvider>(apiUrl, providerData);
    }
}
