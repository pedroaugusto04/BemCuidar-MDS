import { Component, ViewChild } from "@angular/core";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LeafletComponent } from "../leaflet/leaflet.component";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { RequestProviderService } from "../../services/providerServices/request-provider.service";
import { CookieService } from "ngx-cookie-service";
import { ActivatedRoute } from "@angular/router";
import L from "leaflet";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { CommonModule } from "@angular/common";


@Component({
  selector: "app-request-provider",
  standalone: true,
  imports: [
    NavBarComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    LeafletComponent,
    CommonModule
  ],
  templateUrl: "./request-provider.component.html",
  styleUrl: "./request-provider.component.scss",
})
export class RequestProviderComponent {
  @ViewChild(LeafletComponent) leafletComponent!: LeafletComponent;
  isMobile$!: Observable<boolean>;
  isFieldClicked: boolean = false;
  form!: FormGroup;
  formData = new FormData();
  user: any;
  providerId!: string;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService,
    private providerService: RequestProviderService,
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver
  ) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      phone: ["", [Validators.required]],
      country: ["", [Validators.required, Validators.minLength(3)]],
      state: ["", [Validators.required]],
      city: ["", [Validators.required, Validators.minLength(3)]],
      neighborhood: ["", [Validators.required]],  
    });

    this.route.paramMap.subscribe((params) => {
      this.providerId = params.get("providerId") || ""; 
    });
  }

  ngOnInit(): void {
      this.isMobile$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(result => result.matches)
      );
  }

  formErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);
    if (field?.hasError("required")) {
      return "Este campo é necessário";
    }
    if (field?.hasError("whitespace")) {
      return "Este campo não pode conter apenas espaços em branco";
    }
    if (field?.hasError("minlength")) {
      return "Este campo está muito curto";
    }
    if (field?.hasError("link")) {
      return "Link inválido";
    }

    return "Este campo é necessário";
  }

  requestProvider() {
    if (!this.cookieService.get("token")) {
      this.onError("Faça login para solicitar um cuidador!");
      return;
    }

    this.formData = new FormData();
    this.formData.append("req_name", this.form.value.name);
    this.formData.append("req_phone", this.form.value.phone);
    this.formData.append("req_country", this.form.value.country);

    const country: String = this.form.value.country;
    const state: String = this.form.value.state;
    const city: String = this.form.value.city;
    const neighborhood: String = this.form.value.neighborhood;
    const address = `${neighborhood} ${city} ${state} ${country}`;
    
    this.formData.append("req_address", address);
    this.formData.append("req_city",this.form.value.city);

    if (this.form.invalid) {
      this.onError("Preencha os campos corretamente!");
      return;
    }
    if (!this.leafletComponent.hasAddress) {
      this.onError("Por favor, digite um endereço válido!");
      return;
    }

    this.providerService.requestProvider(this.formData,this.providerId).subscribe({
      next: () => this.onSuccess("Cuidador solicitado com sucesso!"),
      error: () => {
        this.onError("Erro ao solicitar cuidador!");
        return;
      },
    });
  }

  onSuccess(msg: string) {
    this.snackBar.open(msg, "X", {
      duration: 1000,
      verticalPosition: "top",
      panelClass: ["success-snackbar"],
    });

    setTimeout(() => {
      this.router.navigateByUrl("/discover");
    }, 1000);
  }

  onError(msg: string) {
    this.snackBar.open(msg, "X", {
      duration: 1000,
      verticalPosition: "top",
      panelClass: ["error-snackbar"],
    });
  }

  verifyAddress(){
    const country: String = this.form.value.country;
    const state: String = this.form.value.state;
    const city: String = this.form.value.city;
    const neighborhood: String = this.form.value.neighborhood;
    const fullAddress = `${neighborhood} ${city} ${state} ${country}`;
    
    this.getCoordinates(fullAddress).subscribe({
      next: (response: any) => {
        if (response && response.length > 0) {
          const location = response[0];
          const latitude: number = location.lat;
          const longitude: number = location.lon;
          // encontrou endereço (marca no mapa)
          this.leafletComponent.addMarker(latitude, longitude);
          this.leafletComponent.setView(latitude,longitude,13);
        } else {
          // avisa que o endereco nao foi encontrado
          this.onError("Endereço não encontrado");
        }
      },
      error: (err) => {
        this.onError("Endereço não encontrado");
      }
    });
  }

  
  getCoordinates(address: string): Observable<any> {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;
    return this.http.get(url);
  }
}
