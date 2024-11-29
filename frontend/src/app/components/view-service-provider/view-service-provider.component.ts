import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ServiceProvider } from "../../models/ServiceProvider";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { ProviderService } from "../../services/providerServices/provider.service";
import { User } from "../../models/User";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LoginService } from "../../services/userServices/login.service";

@Component({
  selector: "app-view-service-provider",
  templateUrl: "./view-service-provider.component.html",
  styleUrls: ["./view-service-provider.component.scss"],
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogModule],
})
export class ViewServiceProviderComponent {
  user$!: Observable<User | null>;
  userId!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public modal: { serviceProvider: ServiceProvider },
    private providerService: ProviderService,
    private loginService: LoginService,
    private cookieService: CookieService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.user$ = this.loginService.getUserInfo();
  }

  enviarSolicitacao() {
    if (!this.cookieService.get("token")) {
      this.onError("Faça login para solicitar um cuidador!");
      return;
    }

    const serviceProvider = this.modal.serviceProvider;

    this.providerService.requestProvider(serviceProvider.id).subscribe({
      next: () => this.onSuccess("Cuidador solicitado com sucesso!"),
      error: () => {
        this.onError("Erro ao solicitar cuidador!");
        return;
      },
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
