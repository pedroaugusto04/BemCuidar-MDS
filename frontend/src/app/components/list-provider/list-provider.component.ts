import { Component, OnInit, ViewChild } from "@angular/core";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { ServiceProvider } from "../../models/ServiceProvider";
import { CardServiceProviderComponent } from "../card-service-provider/card-service-provider.component";
import { ProviderService } from "../../services/providerServices/provider.service";
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "../loading/loading.component";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { LeafletComponent } from "../leaflet/leaflet.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";

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
    LeafletComponent,
  ],
  templateUrl: "./list-provider.component.html",
  styleUrls: ["./list-provider.component.scss"],
})
export class ListProviderComponent implements OnInit {
  providers$!: Observable<ServiceProvider[]>;
  cityFilter: string = "";
  allProviders: ServiceProvider[] = [];
  filteredProviders: ServiceProvider[] = [];
  @ViewChild(LeafletComponent) leafletComponent!: LeafletComponent;

  private cityFilterSubject = new Subject<string>();

  constructor(
    private providerService: ProviderService,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.providers$ = this.providerService.getProviders();
    this.providers$.subscribe((providers) => {
      this.allProviders = providers;
      this.filteredProviders = providers;
      this.verifyAddress(this.filteredProviders);
    });

    // debounce pro filtro de cidade
    this.cityFilterSubject
      .pipe(
        debounceTime(300), // espera 300ms após o usuário parar de digitar
        distinctUntilChanged() 
      )
      .subscribe((city) => {
        this.filteredProviders = this.filterProvidersByCity(city);
        this.verifyAddress(this.filteredProviders);
      });
  }

  onCityFilterChange(city: string): void {
    this.cityFilterSubject.next(city);
  }

  filterProvidersByCity(city: string): ServiceProvider[] {
    if (!city) {
      return this.allProviders;
    }
    this.leafletComponent.clearMarkers();
    return this.allProviders.filter((provider) =>
      provider.city?.toLowerCase().includes(city.toLowerCase())
    );
  }

  verifyAddress(filteredProviders: ServiceProvider[]) {
    filteredProviders.forEach((provider) => {
      const country: string = provider.country || '';
      const state: string = provider.state || '';
      const city: string = provider.city || '';
      const neighborhood: string = provider.neighborhood || '';
      const street: string = provider.street || '';
      const streetNumber: string = provider.street_number || '';

      const fullAddress = `${street} ${streetNumber} ${neighborhood} ${city} ${state} ${country}`;

      this.getCoordinates(fullAddress).subscribe({
        next: (response: any) => {
          if (response && response.length > 0) {
            const location = response[0];
            const latitude: number = location.lat;
            const longitude: number = location.lon;
            // Encontrou o endereço (marca no mapa)
            this.leafletComponent.addMarker(latitude, longitude,provider);
          } else {
            this.onError("Endereço não encontrado");
          }
        },
        error: (err) => {
          this.onError("Endereço não encontrado");
        },
      });
    });
  }

  getCoordinates(address: string): Observable<any> {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      address
    )}&format=json`;
    return this.http.get(url);
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
