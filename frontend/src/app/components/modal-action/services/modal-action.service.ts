import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ServiceProvider } from "../../../models/ServiceProvider";
import { ModalActionComponent } from "../modal-action.component";

@Injectable({
  providedIn: "root",
})
export class ModalActionService {
  constructor(private dialog: MatDialog) {}

  openDialog(serviceProvider: ServiceProvider, isProviderRequirement: boolean = false) {
    this.dialog.open(ModalActionComponent, {
      data: { serviceProvider, isProviderRequirement},
      width: "90%",
      height: "95%",
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
