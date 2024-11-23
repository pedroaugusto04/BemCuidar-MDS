import { Injectable } from "@angular/core";
import { User } from "../../../models/User";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor() {}

  save(params: any): Observable<User> {
    return of();
  }
}
