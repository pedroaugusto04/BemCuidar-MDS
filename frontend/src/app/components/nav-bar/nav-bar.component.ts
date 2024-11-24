import { Component, HostListener, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { Router, RouterLink } from "@angular/router";
import { LoginService } from "../../services/userServices/login.service";
import { Observable, delay } from "rxjs";
import { User } from "../../models/User";
import { CommonModule } from "@angular/common";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UserService } from "../../services/userServices/user.service";
import { LoadingService } from "../../loading/services/loading.service";
import { LoadingComponent } from "../../loading/loading.component";

@Component({
  selector: "app-nav-bar",
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    HttpClientModule,
    RouterLink,
    CommonModule,
    LoadingComponent,
  ],
  providers: [MatIconRegistry],
  templateUrl: "./nav-bar.component.html",
  styleUrl: "./nav-bar.component.scss",
})
export class NavBarComponent implements OnInit {
  isMobile!: boolean;
  user$!: Observable<User | null>;
  defaultIcon: string = "assets/imgs/user_icon.svg";

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private loginService: LoginService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private loadingService: LoadingService
  ) {
    if (typeof window !== "undefined") {
      this.isMobile = window.innerWidth < 992;
    }
    this.matIconRegistry.addSvgIcon(
      "Logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/imgs/icon_logo.svg"
      )
    );
  }
  ngOnInit(): void {
    this.loadingService.setLoading(true);
    this.user$ = this.loginService.getUserInfo();
    this.user$.subscribe({
      next: () => {
        this.loadingService.setLoading(false);
      },
      error: () => {
        this.loadingService.setLoading(false);
      },
    });
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 992;
  }

  signOut() {
    this.loginService.signOut();
    this.signOutAlert("Usuário deslogado com suceso!");
  }

  signOutAlert(msg: string) {
    this.snackBar.open(msg, "X", {
      duration: 1000,
      verticalPosition: "top",
      panelClass: ["success-snackbar"],
    });

    setTimeout(() => {
      this.router.navigateByUrl("/home");
    }, 1000);
  }
}
