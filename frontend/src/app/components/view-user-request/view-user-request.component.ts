import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { ProviderService } from "../../services/providerServices/provider.service";
import { User } from "../../models/User";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LoginService } from "../../services/userServices/login.service";
import { Router, RouterLink } from "@angular/router";
import { ViewUserRequestService } from "./services/view-user-request.service";
import { UserRequest } from "../../models/UserRequest";

@Component({
  selector: "app-view-user-request",
  templateUrl: "./view-user-request.component.html",
  styleUrls: ["./view-user-request.component.scss"],
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogModule, RouterLink],
})
export class ViewUserRequestComponent {
  user$!: Observable<User | null>;
  userId!: string;
  isProviderRequirement: boolean = false;

  constructor(
    /*
    isProviderRequirement eh true quando o provider estiver
    visualizando o proprio anuncio. Nao eh mais possivel solicitar 
    e devem aparecer as opcoes para gerenciamento
    */
    @Inject(MAT_DIALOG_DATA)
    public modal: { userRequest: UserRequest, isProviderRequirement: boolean}, 
    private loginService: LoginService,
    private viewUserRequest: ViewUserRequestService,
  ) {}

  ngOnInit(): void {
    this.user$ = this.loginService.getUserInfo();
    this.isProviderRequirement = this.modal.isProviderRequirement;
  }

  closeDialog(){
    this.viewUserRequest.closeDialog();
  }

}
