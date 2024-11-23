import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./components/list-provider/list-provider.routes").then(
        (m) => m.LIST_PROVIDER_ROUTES
      ),
  },
  {
    path: "discover",
    loadChildren: () =>
      import("./components/list-provider/list-provider.routes").then(
        (m) => m.LIST_PROVIDER_ROUTES
      ),
  },
  {
    path: "favorites",
    loadChildren: () =>
      import("./components/list-favorite/list-favorite.component.routes").then(
        (m) => m.LIST_FAVORITE_ROUTES
      ),
  },
  {
    path: "care",
    loadChildren: () =>
      import("./components/register-provider/register-provider.component.routes").then(
        (m) => m.REGISTER_PROVIDER_ROUTES
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./components/list-provider/list-provider.routes").then(
        (m) => m.LIST_PROVIDER_ROUTES
      ),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./components/list-provider/list-provider.routes").then(
        (m) => m.LIST_PROVIDER_ROUTES
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./components/login/login.component.routes").then(
        (m) => m.LOGIN_ROUTES
      ),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./components/register/register.component.routes").then(
        (m) => m.REGISTER_ROUTES
      ),
  },
];
export { Routes };
