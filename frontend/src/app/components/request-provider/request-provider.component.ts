import { Component } from "@angular/core";
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
  isFieldClicked: boolean = false;

  form!: FormGroup;
  formData = new FormData();

  user: any;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private registerProviderService: RegisterProviderService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      phone: ["", [Validators.required]],
      country: ["", [Validators.required, Validators.minLength(3)]],
      state: ["", [Validators.required]],
      city: ["", [Validators.required, Validators.minLength(3)]],
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

  registerProvider() {
    this.formData = new FormData();
    this.formData.append("name", this.form.value.name);
    this.formData.append("phone", this.form.value.phone);
    this.formData.append("country", this.form.value.country);
    this.formData.append("state", this.form.value.state);
    this.formData.append("city", this.form.value.city);

    if (this.form.invalid) {
      this.onError("Preencha os campos corretamente!");
      return;
    }
    this.registerProviderService.register(this.formData).subscribe({
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
}
