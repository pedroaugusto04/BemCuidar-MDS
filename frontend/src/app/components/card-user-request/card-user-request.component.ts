import { Component, Input } from "@angular/core";
import { UserRequestStatus } from "../../models/enums/UserRequestStatus";
import { UserRequest } from "../../models/UserRequest";
import { ProviderService } from "../../services/providerServices/provider.service";
import { RequestProviderService } from "../../services/providerServices/request-provider.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-card-user-request",
  standalone: true,
  imports: [CommonModule, CardUserRequestComponent, MatButtonModule, MatIconModule],
  templateUrl: "./card-user-request.component.html",
  styleUrl: "./card-user-request.component.scss",
})
export class CardUserRequestComponent {
  @Input({ required: false }) req_id!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) photo!: string;
  @Input({ required: false }) status!: string;
  @Input({ required: true }) address!: string;
  @Input({ required: false}) isProvider: boolean = false;
  @Input({ required: false }) phone!: string;
  @Input({ required: false }) enviada: boolean = false;
  userRequestStatus = UserRequestStatus;

  constructor(private providerService: ProviderService, private requestProviderService: RequestProviderService, private snackBar: MatSnackBar
     ) {}

  userRequest!: UserRequest;

  ngOnInit(): void {
    this.userRequest = {
      req_id: this.req_id,
      req_name: this.name,
      req_photo: this.photo,
      req_status: this.status as UserRequestStatus,
      req_address: this.address,
      req_phone: this.phone
    };
  }

  acceptRequest(requestId: string): void {
    this.providerService.setRequestStatus(requestId, UserRequestStatus.Aceito)
      .subscribe({
        next: () => {
          this.onSuccess('Requisição aceita com sucesso!');
          window.location.reload(); 
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
          window.location.reload(); 
        },
        error: (err) => {
          this.onError('Falha ao negar a requisição');
          return;
        }
      });
  }

  cancelRequest(requestId: string): void {
    this.requestProviderService.deleteRequest(requestId).subscribe({
      next: () => {
        this.onSuccess('Solicitação cancelada com sucesso!');
        window.location.reload(); 
      },
      error: (err) => {
        this.onError('Falha ao cancelar a solicitação');
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

  capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  
}
