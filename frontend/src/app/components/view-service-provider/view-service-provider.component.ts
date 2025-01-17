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
import { Router, RouterLink } from "@angular/router";
import { ViewServiceProviderService } from "./services/view-service-provider.service";

@Component({
  selector: "app-view-service-provider",
  templateUrl: "./view-service-provider.component.html",
  styleUrls: ["./view-service-provider.component.scss"],
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogModule, RouterLink],
})
export class ViewServiceProviderComponent {
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
    public modal: { serviceProvider: ServiceProvider, isProviderRequirement: boolean}, 
    private providerService: ProviderService,
    private loginService: LoginService,
    private cookieService: CookieService,
    private snackBar: MatSnackBar,
    private viewServiceProvider: ViewServiceProviderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user$ = this.loginService.getUserInfo();
    this.isProviderRequirement = this.modal.isProviderRequirement;
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

  onRequestProvider(){
    this.closeDialog();

    const serviceProvider = this.modal.serviceProvider;

    this.router.navigateByUrl(`/request-provider/${serviceProvider.id}`);
  }

  closeDialog(){
    this.viewServiceProvider.closeDialog();
  }

}
