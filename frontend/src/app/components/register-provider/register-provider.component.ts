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

@Component({
  selector: "app-register-provider",
  standalone: true,
  imports: [
    NavBarComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: "./register-provider.component.html",
  styleUrl: "./register-provider.component.scss",
})
export class RegisterProviderComponent {
  isFieldClicked: boolean = false;

  form!: FormGroup;
  selectedImage: string | undefined = "";
  formData = new FormData();
  hasErrorImg: string = "";

  user: any;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private registerProviderService: RegisterProviderService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      service_description: ["", [Validators.required, Validators.minLength(3)]],
      age: ["", [Validators.required]],
      country: ["", [Validators.required, Validators.minLength(3)]],
      state: ["", [Validators.required]],
      city: ["", [Validators.required, Validators.minLength(3)]],
      photo: [""],
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

  triggerFile(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      if (this.formData.has("photo")) {
        this.formData.delete("photo");
      }

      this.formData.append("photo", selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result as string;
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  registerProvider() {
    const file = this.formData.get("photo") as File;
    this.formData = new FormData();
    if (file) {
      this.formData.append("photo", file);
    }
    this.formData.append("name", this.form.value.name);
    this.formData.append(
      "service_description",
      this.form.value.service_description
    );
    this.formData.append("age", this.form.value.age);
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
