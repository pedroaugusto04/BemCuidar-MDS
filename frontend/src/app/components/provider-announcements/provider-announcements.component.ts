import { Component } from "@angular/core";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: "app-provider-announcements",
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: "./provider-announcements.component.html",
  styleUrl: "./provider-announcements.component.scss",
})
export class ProviderAnnouncementsComponent {}
