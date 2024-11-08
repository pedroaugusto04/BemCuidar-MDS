import { Component, HostListener } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "app-nav-bar",
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatToolbarModule],
  templateUrl: "./nav-bar.component.html",
  styleUrl: "./nav-bar.component.scss",
})
export class NavBarComponent {
  isMobile!: boolean;

  constructor() {
    if (typeof window !== "undefined") {
      this.isMobile = window.innerWidth < 600;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 600;
  }
}
