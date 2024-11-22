import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes("/login")) {
      return next.handle(req);
    }
    if (req.url === "/users" && req.method == "POST") {
      return next.handle(req);
    }
    const token: string = this.cookieService.get("token");
    const modifiedReq = req.clone({
      setHeaders: { authorization: `${token}` },
    });
    return next.handle(modifiedReq);
  }
}
