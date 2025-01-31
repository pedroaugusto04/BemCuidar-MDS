import { Component, Input } from '@angular/core';
import { ViewServiceProviderService } from '../view-service-provider/services/view-service-provider.service';
import { ServiceProvider } from '../../models/ServiceProvider';
import { RequestProviderService } from '../../services/providerServices/request-provider.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-card-announcement-service-provider',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './card-announcement-service-provider.component.html',
  styleUrl: './card-announcement-service-provider.component.scss'
})
export class CardAnnouncementServiceProviderComponent {
  @Input({ required: true }) providerAnnouncementId!: string;
  @Input({ required: true }) providerAnnouncementName!: string;
  @Input() providerAnnouncementServiceDescription!: string;
  @Input() providerAnnouncementAge!: string;
  @Input({ required: true }) providerAnnouncementCountry!: string;
  @Input({ required: true }) providerAnnouncementState!: string;
  @Input({ required: true }) providerAnnouncementCity!: string;
  @Input() providerAnnouncementPhoto: string | undefined;
  @Input() providerAnnouncementFavorited!: boolean;

  serviceProvider!: ServiceProvider;

  constructor(private viewServiceProviderService: ViewServiceProviderService, private requestProviderService: RequestProviderService,
     private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.serviceProvider = {
      id: this.providerAnnouncementId,
      name: this.providerAnnouncementName,
      service_description: this.providerAnnouncementServiceDescription,
      age: this.providerAnnouncementAge,
      country: this.providerAnnouncementCountry,
      state: this.providerAnnouncementState,
      city: this.providerAnnouncementCity,
      photo: this.providerAnnouncementPhoto,
      favorited: this.providerAnnouncementFavorited,
    };
  }

  onCardClick(): void {
    this.viewServiceProviderService.openDialog(this.serviceProvider,true);
  }

  deleteAnnouncement(providerId: string): void {
    this.requestProviderService.deleteAnnouncement(providerId).subscribe({
      next: () => {
        this.onSuccess('Anúncio deletado com sucesso!');
        setTimeout(() => {
          window.location.reload(); 
        }, 1000); 
      },
      error: (err) => {
        this.onError('Falha ao deletar anúncio ');
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
