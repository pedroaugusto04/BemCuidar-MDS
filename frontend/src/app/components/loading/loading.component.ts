import { Component, OnInit } from "@angular/core";
import { LoadingService } from "./services/loading.service";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "app-loading",
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"],
})
export class LoadingComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService
      .getLoadingState()
      .subscribe((loading) => (this.isLoading = loading));
  }
}
