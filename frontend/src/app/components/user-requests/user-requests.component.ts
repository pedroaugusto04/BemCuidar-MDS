import { Component } from "@angular/core";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { CardUserRequestComponent } from "../card-user-request/card-user-request.component";
import { ProviderService } from "../../services/providerServices/provider.service";
import { ServiceRequest } from "../../models/ServiceRequest";
import { UserRequestStatus } from "../../models/enums/UserRequestStatus";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-user-requests",
  standalone: true,
  imports: [NavBarComponent, CommonModule, CardUserRequestComponent],
  templateUrl: "./user-requests.component.html",
  styleUrl: "./user-requests.component.scss",
})
export class UserRequestsComponent {
  requests$!: Observable<ServiceRequest[]>;

  constructor(private providerService: ProviderService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.requests$ = this.providerService.getRequests();
  }

  acceptRequest(requestId: string): void {
    this.providerService.setRequestStatus(requestId, UserRequestStatus.Aceito)
      .subscribe({
        next: () => {
          this.onSuccess('Requisição aceita com sucesso!');
          setTimeout(() => {
            window.location.reload(); 
          }, 1000); 
        },
        error: (err) => {
          this.onError('Falha ao aceitar a requisição');
          return;
        }
      });
  }

  denyRequest(requestId: string): void {
    this.providerService.setRequestStatus(requestId, UserRequestStatus.Negado)
      .subscribe({
        next: () => {
          this.onSuccess('Requisição negada com sucesso!');
          setTimeout(() => {
            window.location.reload(); 
          }, 1000); 
        },
        error: (err) => {
          this.onError('Falha ao negar a requisição');
          return;
        }
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
