import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideAnimations } from "@angular/platform-browser/animations";

import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from "@angular/router";
import { APP_ROUTES } from "./app/app.routes";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
    provideAnimations(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
  ],
}).catch((err) => console.error(err));
