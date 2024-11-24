import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ServiceProvider } from "../../models/ServiceProvider";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { ProviderService } from "../../services/providerServices/provider.service";
import { User } from "../../models/User";
import { UserService } from "../../services/userServices/user.service";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-view-service-provider",
  templateUrl: "./view-service-provider.component.html",
  styleUrls: ["./view-service-provider.component.scss"],
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogModule],
})
export class ViewServiceProviderComponent {
  user$!: Observable<User>;
  userId!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public modal: { serviceProvider: ServiceProvider },
    private providerService: ProviderService,
    private userService: UserService,
    private cookieService: CookieService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUserInfo();
  }

  enviarSolicitacao() {
    if (!this.cookieService.get("token")) {
      this.onError("Faça login para solicitar um cuidador!");
    }

    const serviceProvider = this.modal.serviceProvider;

    this.providerService.requestProvider(serviceProvider.id).subscribe({
      next: () => this.onSuccess("Cuidador solicitado com sucesso!"),
      error: () => this.onError("Erro ao solicitar cuidador!"),
    });
  }

  onSuccess(msg: string) {
    this.snackBar.open(msg, "X", {
      duration: 1000,
      verticalPosition: "top",
      panelClass: ["success-snackbar"],
    });
  }

  onError(msg: string) {
    this.snackBar.open(msg, "X", {
      duration: 1000,
      verticalPosition: "top",
      panelClass: ["error-snackbar"],
    });
  }
}
