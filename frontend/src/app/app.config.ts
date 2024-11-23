import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideClientHydration } from "@angular/platform-browser";
import { APP_ROUTES } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(APP_ROUTES), provideClientHydration()],
};
