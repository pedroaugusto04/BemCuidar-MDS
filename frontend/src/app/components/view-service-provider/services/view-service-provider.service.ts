import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ViewServiceProviderComponent } from "../view-service-provider.component";
import { ServiceProvider } from "../../../models/ServiceProvider";

@Injectable({
  providedIn: "root",
})
export class ViewServiceProviderService {
  constructor(private dialog: MatDialog) {}

  openDialog(serviceProvider: ServiceProvider, isProviderRequirement: boolean = false) {
    this.dialog.open(ViewServiceProviderComponent, {
      data: { serviceProvider, isProviderRequirement},
      width: "90%",
      height: "95%",
    });
  }
}
