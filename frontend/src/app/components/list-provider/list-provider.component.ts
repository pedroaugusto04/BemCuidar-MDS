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
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "../loading/loading.component";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { LeafletComponent } from "../leaflet/leaflet.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

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
    MatCheckboxModule,
    MatPaginator,
  ],
  templateUrl: "./list-provider.component.html",
  styleUrls: ["./list-provider.component.scss"],
})
export class ListProviderComponent implements OnInit {
  providers$!: Observable<ServiceProvider[]>;
  cityFilter: string = "";
  elderlyFilter: boolean = false;
  childrenFilter: boolean = false;
  disabledFilter: boolean = false;
  allProviders: ServiceProvider[] = [];
  filteredProviders: ServiceProvider[] = [];
  paginatedProviders: ServiceProvider[] = [];
  pageSize = 6;
  pageIndex = 0;

  @ViewChild(LeafletComponent) leafletComponent!: LeafletComponent;
  isMobile$!: Observable<boolean>;

  private cityFilterSubject = new Subject<string>();

  constructor(
    private providerService: ProviderService,
    private snackBar: MatSnackBar,
    private http: HttpClient, 
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.isMobile$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(result => result.matches)
    );
    this.providers$ = this.providerService.getProviders();
    this.providers$.subscribe((providers) => {
      this.allProviders = providers;
      this.filteredProviders = providers;
      this.updatePaginatedProviders();
      this.addProviderMarkers(this.filteredProviders);
    });

    this.cityFilterSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((city) => {
        this.onFilterChange();
      });
  }

  onCityFilterChange(city: string): void {
    this.cityFilterSubject.next(city);
  }

  onElderlyFilterChange(v: boolean): void {
    this.onFilterChange();
  }

  onChildrenFilterChange(v: boolean): void {
    this.onFilterChange();
  }

  onDisabledFilterChange(v: boolean): void {
    this.onFilterChange();
  }

  onFilterChange(): void {
    this.leafletComponent.clearMarkers();
    this.filteredProviders = this.filterProviders();
    this.updatePaginatedProviders();
    this.addProviderMarkers(this.filteredProviders);
  }

  filterProvidersByCity(city: string): ServiceProvider[] {
    if (!city) {
      return this.allProviders;
    }
    this.leafletComponent.clearMarkers();
    return this.allProviders.filter((provider) => {
      provider.city?.toLowerCase().includes(city.toLowerCase());
    });
  }

  filterProviders(): ServiceProvider[] {
    if (!this.cityFilter && !this.childrenFilter && !this.elderlyFilter && !this.disabledFilter) {
      return this.allProviders;
    }
    return this.allProviders.filter((provider) =>
      provider.city?.toLowerCase().includes(this.cityFilter.toLowerCase()) && 
      !(!provider.exp_children && this.childrenFilter) && 
      !(!provider.exp_elderly && this.elderlyFilter) &&
      !(!provider.exp_disabled && this.disabledFilter)
    );
  }

  addProviderMarkers(filteredProviders: ServiceProvider[]) {
    let maxlon = Number.NEGATIVE_INFINITY;
    let minlon = Number.POSITIVE_INFINITY;
    let maxlat = Number.NEGATIVE_INFINITY;
    let minlat = Number.POSITIVE_INFINITY;
    for (let i = 0; i < filteredProviders.length; i++) {
      const lon = filteredProviders[i].coords_lon;
      const lat = filteredProviders[i].coords_lat;
      if (!lon || !lat)
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

    const maxdif = Math.sqrt(Math.pow((maxlon - minlon) / 2, 2) + Math.pow(maxlat - minlat, 2));
    const zoom = Math.log2(360 / maxdif);

    this.leafletComponent.setView((minlat + maxlat) / 2, (minlon + maxlon) / 2, zoom);

    for (let i = 0; i < filteredProviders.length; i++) {
      const lon = filteredProviders[i].coords_lon;
      const lat = filteredProviders[i].coords_lat;
      if (!lon || !lat)
        continue;
      this.leafletComponent.addMarker(lat, lon, filteredProviders[i]);
    }
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePaginatedProviders();
  }

  updatePaginatedProviders() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProviders = this.filteredProviders.slice(startIndex, endIndex);
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