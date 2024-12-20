import { Component, Input } from '@angular/core';
import { ViewServiceProviderService } from '../view-service-provider/services/view-service-provider.service';
import { ServiceProvider } from '../../models/ServiceProvider';

@Component({
  selector: 'app-card-announcement-service-provider',
  standalone: true,
  imports: [],
  templateUrl: './card-announcement-service-provider.component.html',
  styleUrl: './card-announcement-service-provider.component.scss'
})
export class CardAnnouncementServiceProviderComponent {
  @Input() providerAnnouncementId!: string;
  @Input({ required: true }) providerAnnouncementName!: string;
  @Input() providerAnnouncementServiceDescription!: string;
  @Input() providerAnnouncementAge!: string;
  @Input({ required: true }) providerAnnouncementCountry!: string;
  @Input({ required: true }) providerAnnouncementState!: string;
  @Input({ required: true }) providerAnnouncementCity!: string;
  @Input() providerAnnouncementPhoto: string | undefined;
  @Input() providerAnnouncementFavorited!: boolean;

  serviceProvider!: ServiceProvider;

  constructor(private viewServiceProviderService: ViewServiceProviderService) {}

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
}
