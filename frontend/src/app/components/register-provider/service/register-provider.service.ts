import { Injectable } from '@angular/core';
import { ServiceProvider } from '../../../models/ServiceProvider';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterProviderService {

  constructor() { }

  register(provider: FormData): Observable<ServiceProvider>{
    console.log("registrou");
    return of();
  }
}
