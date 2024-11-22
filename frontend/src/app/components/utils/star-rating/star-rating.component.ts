import { Component, Input } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { UserService } from "../../../services/userServices/user.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-star-rating",
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: "./star-rating.component.html",
  styleUrl: "./star-rating.component.scss",
})
export class StarRatingComponent {
  faStar = faStar;
  @Input({ required: true }) active!: boolean;
  @Input({ required: true }) providerId!: string;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private cookieService: CookieService
  ) {}

  onClick() {
    if (!this.cookieService.get("token")) {
      this.onError("Faça login para favoritar um cuidador!");
    }
    if (this.active) {
      this.unfavorite();
    } else {
      this.favorite();
    }
    this.active = !this.active;
  }

  favorite() {
    this.userService.favoriteProvider(this.providerId).subscribe({
      next: () => this.onSuccess("Cuidador favoritado com sucesso!"),
      error: () => this.onError("Erro ao favoritar cuidador!"),
    });
  }

  unfavorite() {
    this.userService.unfavoriteProvider(this.providerId).subscribe({
      next: () => this.onSuccess("Cuidador desfavoritado com sucesso!"),
      error: () => this.onError("Erro ao desfavoritar cuidador!"),
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
