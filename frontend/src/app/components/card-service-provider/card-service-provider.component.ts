import { Component, Input, booleanAttribute, numberAttribute } from "@angular/core";
import { StarRatingComponent } from "../utils/star-rating/star-rating.component";
import { ServiceProvider } from "../../models/ServiceProvider";
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
  @Input({ required: true, transform: booleanAttribute }) providerExp_elderly!: boolean;
  @Input({ required: true, transform: booleanAttribute }) providerExp_children!: boolean;
  @Input({ required: true, transform: booleanAttribute }) providerExp_disabled!: boolean;
  @Input({ transform: numberAttribute }) providerExperience!: number;
  @Input() providerQualifications!: string;
  @Input() providerPhoto: string | undefined;
  @Input() providerFavorited!: boolean;
  @Input() discover!: boolean;

  serviceProvider!: ServiceProvider;
  bio: String = "";

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
      exp_elderly: this.providerExp_elderly,
      exp_children: this.providerExp_children,
      exp_disabled: this.providerExp_disabled,
      experience: Number.isNaN(this.providerExperience) ? undefined : this.providerExperience,
      qualifications: this.providerQualifications
    };
    this.bio = this.providerServiceDescription.slice(0, 50);
    if (this.providerServiceDescription.length > 50){
      this.bio += "...";
    }
  }

  onCardClick(): void {
    this.viewServiceProviderService.openDialog(this.serviceProvider);
  }
}
