import { Component } from "@angular/core";
import { LoadingService } from "./services/loading.service";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "app-loading",
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: "./loading.component.html",
  styleUrl: "./loading.component.scss",
})
export class LoadingComponent {
  loading$ = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) {}
}
