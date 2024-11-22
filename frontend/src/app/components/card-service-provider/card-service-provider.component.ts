import { Component, Input } from "@angular/core";
import { StarRatingComponent } from "../utils/star-rating/star-rating.component";

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

}
