import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ServiceProvider } from "../../../models/ServiceProvider";
import { ViewUserRequestComponent } from "../view-user-request.component";
import { UserRequest } from "../../../models/UserRequest";

@Injectable({
  providedIn: "root",
})
export class ViewUserRequestService {
  constructor(private dialog: MatDialog) {}

  openDialog(userRequest: UserRequest, isProviderRequirement: boolean = false) {
    this.dialog.open(ViewUserRequestComponent, {
      data: { userRequest, isProviderRequirement},
      width: "90%",
      height: "95%",
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
