import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { StarRatingComponent } from "./components/utils/star-rating/star-rating.component";
import { LoadingComponent } from "./loading/loading.component";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, StarRatingComponent, LoadingComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "mds";

  constructor() {}
}
