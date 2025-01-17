import { Component, OnInit } from "@angular/core";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { ServiceProvider } from "../../models/ServiceProvider";
import { CardServiceProviderComponent } from "../card-service-provider/card-service-provider.component";
import { ProviderService } from "../../services/providerServices/provider.service";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "../loading/loading.component";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-list",
  standalone: true,
  imports: [
    NavBarComponent,
    CardServiceProviderComponent,
    MatCardModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
    LoadingComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: "./list-provider.component.html",
  styleUrls: ["./list-provider.component.scss"],
})
export class ListProviderComponent implements OnInit {
  providers$!: Observable<ServiceProvider[]>;
  cityFilter: string = "";
  allProviders: ServiceProvider[] = [];
  filteredProviders: ServiceProvider[] = [];

  constructor(private providerService: ProviderService) {}

  ngOnInit(): void {
    this.providers$ = this.providerService.getProviders();
    this.providers$.subscribe((providers) => {
      this.allProviders = providers; 
      this.filteredProviders = providers; 
    });
  }

  onCityFilterChange(): void {
    this.filteredProviders = this.filterProvidersByCity(this.cityFilter);
  }

  filterProvidersByCity(city: string): ServiceProvider[] {
    if (!city) {
      return this.allProviders; 
    }
    return this.allProviders.filter((provider) =>
      provider.city?.toLowerCase().includes(city.toLowerCase()) 
    );
  }
}
