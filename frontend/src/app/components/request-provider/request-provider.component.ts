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
import { RegisterProviderService } from "../../services/providerServices/register-provider.service";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LeafletComponent } from "../leaflet/leaflet.component";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { RequestProviderService } from "../../services/providerServices/request-provider.service";

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
    LeafletComponent
  ],
  templateUrl: "./request-provider.component.html",
  styleUrl: "./request-provider.component.scss",
})
export class RequestProviderComponent {
  @ViewChild(LeafletComponent) leafletComponent!: LeafletComponent;
  isFieldClicked: boolean = false;
  form!: FormGroup;
  formData = new FormData();
  user: any;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private requestProviderService: RequestProviderService,
    private snackBar: MatSnackBar,
    private router: Router,
    private http: HttpClient
  ) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      phone: ["", [Validators.required]],
      country: ["", [Validators.required, Validators.minLength(3)]],
      state: ["", [Validators.required]],
      city: ["", [Validators.required, Validators.minLength(3)]],
      neighborhood: ["", [Validators.required]],  
      street: ["", [Validators.required]],      
      streetNumber: ["", [Validators.required]]  
    });
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
    this.formData = new FormData();
    this.formData.append("name", this.form.value.name);
    this.formData.append("phone", this.form.value.phone);
    this.formData.append("country", this.form.value.country);
    this.formData.append("state", this.form.value.state);
    this.formData.append("city", this.form.value.city);
    this.formData.append("neighborhood", this.form.value.neighborhood); 
    this.formData.append("street", this.form.value.street); 
    this.formData.append("number", this.form.value.streetNumber); 

    if (this.form.invalid) {
      this.onError("Preencha os campos corretamente!");
      return;
    }
    if (!this.leafletComponent.hasAddress) {
      this.onError("Por favor, digite um endereço válido!");
      return;
    }
    this.requestProviderService.register(this.formData).subscribe({
      next: () => {
        this.onSuccess("Cuidador registrado com sucesso!");
      },
      error: (error: any) => {
        this.onError("Erro ao registrar cuidador!");
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
      this.router.navigateByUrl("/home");
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
    const street: String = this.form.value.street;
    const streetNumber: String = this.form.value.streetNumber;
    const fullAddress = `${street} ${streetNumber} ${neighborhood} ${city} ${state} ${country}`;

    this.getCoordinates(fullAddress).subscribe(
      (response: any) => {
        if (response && response.length > 0) {
          const location = response[0];
          const latitude: number = location.lat;
          const longitude: number = location.lon;
          // encontrou endereço (marca no mapa)
          this.leafletComponent.addMarker(latitude,longitude);
        } else {
          // avisa que o endereco nao foi encontrado
          this.onError("Endereço não encontrado");
        }
      },
      (error) => {
        this.onError("Endereço não encontrado");
      }
    );
  }
  
  getCoordinates(address: string): Observable<any> {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;
    return this.http.get(url);
  }
}
