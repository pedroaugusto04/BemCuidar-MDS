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
      this.addProviderMarkers(this.filteredProviders);
    });

    // debounce pro filtro de cidade
    this.cityFilterSubject
      .pipe(
        debounceTime(300), // espera 300ms após o usuário parar de digitar
        distinctUntilChanged() 
      )
      .subscribe((city) => {
        this.filteredProviders = this.filterProvidersByCity(city);
        this.addProviderMarkers(this.filteredProviders);
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

  addProviderMarkers(filteredProviders: ServiceProvider[]) {
    let maxlon = Number.NEGATIVE_INFINITY;
    let minlon = Number.POSITIVE_INFINITY;
    let maxlat = Number.NEGATIVE_INFINITY;
    let minlat = Number.POSITIVE_INFINITY;
    for(let i=0;i<filteredProviders.length;i++){
      const lon = filteredProviders[i].coords_lon;
      const lat = filteredProviders[i].coords_lat;
      if(!lon || !lat)
        continue;
      if (lon > maxlon)
        maxlon = lon;
      if (lon < minlon)
        minlon = lon;
      if (lat > maxlat)
        maxlat = lat;
      if (lat < minlat)
        minlat = lat;
    }

    const maxdif = Math.sqrt(Math.pow((maxlon - minlon)/2, 2) + Math.pow(maxlat - minlat, 2))
    const zoom = Math.log2(360 / maxdif);

    this.leafletComponent.setView((minlat + maxlat)/2, (minlon + maxlon)/2, zoom);

    for(let i=0;i<filteredProviders.length;i++){
      const lon = filteredProviders[i].coords_lon;
      const lat = filteredProviders[i].coords_lat;
      if(!lon || !lat)
        continue;
      this.leafletComponent.addMarker(lat, lon,filteredProviders[i]);
    }
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
