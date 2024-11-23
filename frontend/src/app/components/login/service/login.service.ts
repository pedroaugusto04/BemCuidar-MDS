import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {}

  authenticate(form: FormGroup): Observable<boolean> {
    return of();
  }
}
