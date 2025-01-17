import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProviderService } from '../../services/providerServices/provider.service';
import { ServiceRequest } from '../../models/ServiceRequest';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { CardUserRequestComponent } from '../card-user-request/card-user-request.component';
import { MatButtonModule } from '@angular/material/button';
import { UserRequestStatus } from '../../models/enums/UserRequestStatus';
import { ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-provider-requests',
  standalone: true,
  imports: [NavBarComponent,CommonModule, CardUserRequestComponent, MatButtonModule],
  templateUrl: './provider-requests.component.html',
  styleUrl: './provider-requests.component.scss'
})
export class ProviderRequestsComponent {
  requests$!: Observable<ServiceRequest[]>;
  userRequestStatus = UserRequestStatus;

  constructor(private providerService: ProviderService,private snackBar: MatSnackBar,
    private route: ActivatedRoute 
   ) {}

  ngOnInit(): void {
    this.requests$ = this.providerService.getRequests();
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
