import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { StarRatingComponent } from "./components/utils/star-rating/star-rating.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, StarRatingComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "mds";
}
