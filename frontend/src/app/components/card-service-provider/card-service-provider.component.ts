import { Component, Input } from "@angular/core";
import { StarRatingComponent } from "../utils/star-rating/star-rating.component";
import { ServiceProvider } from "../../models/ServiceProvider";
import { ViewServiceProviderComponent } from "../view-service-provider/view-service-provider.component";
import { ViewServiceProviderService } from "../view-service-provider/services/view-service-provider.service";

@Component({
  selector: "app-card-service-provider",
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: "./card-service-provider.component.html",
  styleUrl: "./card-service-provider.component.scss",
})
export class CardServiceProviderComponent {
  @Input() providerId!: string;
  @Input({ required: true }) providerName!: string;
  @Input() providerServiceDescription!: string;
  @Input() providerAge!: string;
  @Input({ required: true }) providerCountry!: string;
  @Input({ required: true }) providerState!: string;
  @Input({ required: true }) providerCity!: string;
  @Input() providerPhoto: string | undefined;
  @Input() providerFavorited!: boolean;
  @Input() discover!: boolean;

  serviceProvider!: ServiceProvider;

  constructor(private viewServiceProviderService: ViewServiceProviderService) {}

  ngOnInit(): void {
    this.serviceProvider = {
      id: this.providerId,
      name: this.providerName,
      service_description: this.providerServiceDescription,
      age: this.providerAge,
      country: this.providerCountry,
      state: this.providerState,
      city: this.providerCity,
      photo: this.providerPhoto,
      favorited: this.providerFavorited,
    };
  }

  onCardClick(): void {
    this.viewServiceProviderService.openDialog(this.serviceProvider);
  }
}
