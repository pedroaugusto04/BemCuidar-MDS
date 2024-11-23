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
import { RegisterProviderService } from "./service/register-provider.service";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: "app-register-provider",
  standalone: true,
  imports: [
    NavBarComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
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
    private registerProviderService: RegisterProviderService
  ) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      serviceDescription: ["", [Validators.required, Validators.minLength(3)]],
      age: ["", [Validators.required]],
      country: ["", [Validators.required, Validators.minLength(3)]],
      state: ["", [Validators.required]],
      city: ["", [Validators.required, Validators.minLength(3)]],
      photo: ["", [Validators.required, Validators.minLength(3)]],
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
      if (this.formData.has("imgUrl")) {
        this.formData.delete("imgUrl");
      }

      this.formData.append("imgUrl", selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result as string;
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  addProject() {
    this.formData.append("name", this.form.value.name);
    this.formData.append(
      "serviceDescription",
      this.form.value.serviceDescription
    );
    this.formData.append("age", this.form.value.age);
    this.formData.append("country", this.form.value.country);
    this.formData.append("state", this.form.value.state);
    this.formData.append("city", this.form.value.city);
    this.formData.append("photo", this.form.value.photo);
    this.registerProviderService.register(this.formData).subscribe({
      next: () => {
        this.onSuccess();
      },
      error: (error: any) => {
        this.onError();
      },
    });
  }

  onSuccess() {
    console.log("sucesso");
  }

  onError() {
    console.log("erro");
  }
}
