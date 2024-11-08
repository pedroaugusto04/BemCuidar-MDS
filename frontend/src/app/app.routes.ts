import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  {
    path: "",
    loadChildren: () => import("./components/list-provider/list-provider.routes").then(m => m.LIST_ROUTES),
  },
];
export { Routes };

