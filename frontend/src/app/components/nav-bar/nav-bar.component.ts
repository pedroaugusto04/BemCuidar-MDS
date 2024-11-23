import { Component, HostListener } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import {RouterLink } from "@angular/router";

@Component({
  selector: "app-nav-bar",
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    HttpClientModule,
    RouterLink,
  ],
  providers: [MatIconRegistry],
  templateUrl: "./nav-bar.component.html",
  styleUrl: "./nav-bar.component.scss",
})
export class NavBarComponent {
  isMobile!: boolean;
  isLoggedIn: boolean = false;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    if (typeof window !== "undefined") {
      this.isMobile = window.innerWidth < 992;
    }
    this.matIconRegistry.addSvgIcon(
      "Logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../../assets/imgs/logo.svg"
      )
    );
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 992;
  }
}
