import { Component, Input } from "@angular/core";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ServiceProvider } from "../../models/ServiceProvider";
import { Observable } from "rxjs";
import { ProviderService } from "../../services/providerServices/provider.service";
import { CommonModule } from "@angular/common";
import { CardAnnouncementServiceProviderComponent } from "../card-announcement-service-provider/card-announcement-service-provider.component";

@Component({
  selector: "app-provider-announcements",
  standalone: true,
  imports: [NavBarComponent,CommonModule,CardAnnouncementServiceProviderComponent],
  templateUrl: "./provider-announcements.component.html",
  styleUrl: "./provider-announcements.component.scss",
})
export class ProviderAnnouncementsComponent {
  providerAnnouncements$!: Observable<ServiceProvider[]>;

  constructor(private providerService: ProviderService) {}

  ngOnInit(): void {
    this.providerAnnouncements$ = this.providerService.getProviderAnnouncements();
  }
}
