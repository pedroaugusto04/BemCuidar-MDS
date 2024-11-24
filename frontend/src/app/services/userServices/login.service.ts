import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { AuthResponse } from "../../models/AuthResponse";
import { CookieService } from "ngx-cookie-service";
import { User } from "../../models/User";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private readonly API = environment.baseUrl;
  private userSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this.userSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  authenticate(form: FormGroup) {
    const userData = form.value;
    return new Observable<boolean>((observer) => {
      const apiUrl = new URL(environment.getApiAuth, this.API).toString();
      this.httpClient.post<AuthResponse>(apiUrl, userData).subscribe({
        next: (result: AuthResponse) => {
          this.cookieService.set("token", result.token, {
            expires: 1,
            sameSite: "Strict",
            secure: true,
          }); // setting token in cookies
          observer.next(true);
          observer.complete();
        },
        error: (error: any) => {
          observer.next(false);
          observer.complete();
        },
      });
    });
  }

  getToken() {
    return this.cookieService.get("token") ?? "";
  }

  getUserInfo(): Observable<User | null> {
    if (this.userSubject.value) {
      return new Observable<User>((observer) => {
        // retorna o valor direto do subject
        observer.next(this.userSubject.value!);
        observer.complete();
      });
    }
    const apiUrl = new URL(environment.getApiUsersInfo, this.API).toString();

    return this.httpClient.get<User>(apiUrl).pipe(
      tap((user) => {
        this.userSubject.next(user); // busca o usuario do banco e armazena no subject
      })
    );
  }

  signOut() {
    this.userSubject.next(null); // limpa os dados carregados
    this.cookieService.deleteAll();
  }

  getAuthorizationToken(item: string) {
    const token = this.cookieService.get("token") ?? "";
    return token;
  }
  private safeBase64Decode(base64String: string): string | null {
    try {
      const safeBase64String = base64String
        .replace(/-/g, "+")
        .replace(/_/g, "/");
      return atob(safeBase64String);
    } catch (error) {
      console.error("Error decoding base64 string:", error);
      return null;
    }
  }

  isTokenExpired(token: string) {
    if (!token) {
      return true;
    }

    try {
      const tokenParts = token.split(".");
      if (tokenParts.length !== 3) {
        console.error("The token is not in the expected JWT format");
        return true;
      }
      const decodedPayload = this.safeBase64Decode(tokenParts[1]);
      if (!decodedPayload) {
        console.error("Failed to decode token payload");
        return true;
      }
      const payload = JSON.parse(decodedPayload);
      const expirationTimeInSeconds = payload.exp;
      const expirationTimeInMillis = expirationTimeInSeconds * 1000;
      const now = Date.now();
      return now >= expirationTimeInMillis;
    } catch (error) {
      console.error("Error validating token expiration:", error);
      return true;
    }
  }
}
