import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { ServiceProvider } from "../../models/ServiceProvider";
import { ProviderService } from "../../services/providerServices/provider.service";
import { User } from "../../models/User";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LoginService } from "../../services/userServices/login.service";
import { Router, RouterLink } from "@angular/router";
import { ModalActionService } from "./services/modal-action.service";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { RegisterProviderService } from "../../services/providerServices/register-provider.service";
import { HttpClient } from "@angular/common/http";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: "app-modal-action-component",
  templateUrl: "./modal-action.component.html",
  styleUrls: ["./modal-action.component.scss"],
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
})
export class ModalActionComponent {
   user$!: Observable<User | null>;
   userId!: string;
   isProviderRequirement: boolean = false;
   isFieldClicked: boolean = false;
   form!: FormGroup;
   selectedImage: string | undefined = "";
   formData = new FormData();
   hasErrorImg: string = "";

   constructor(
    @Inject(MAT_DIALOG_DATA)
    public modal: { serviceProvider: ServiceProvider, isProviderRequirement: boolean}, 
    private loginService: LoginService,
    private cookieService: CookieService,
    private snackBar: MatSnackBar,
    private modalActionService: ModalActionService,
    private router: Router,
    private formBuilder: NonNullableFormBuilder,
    private registerProviderService: RegisterProviderService,
    private providerService: ProviderService,
    private http: HttpClient
  ) {
    if (!this.cookieService.get("token")) {
      this.onError("Faça login para se registrar como cuidador!");
      return;
    }
    this.selectedImage = this.modal.serviceProvider.photo;
    this.form = this.formBuilder.group({
          service_description: [this.modal.serviceProvider.service_description, [Validators.required, Validators.minLength(3)]],
          age: [this.modal.serviceProvider.age, [Validators.required]],
          country: [this.modal.serviceProvider.country, [Validators.required, Validators.minLength(3)]],
          state: [this.modal.serviceProvider.state, [Validators.required]],
          city: [this.modal.serviceProvider.city, [Validators.required, Validators.minLength(3)]],
          neighborhood: [this.modal.serviceProvider.neighborhood, [Validators.required]],  
          street: [this.modal.serviceProvider.street, [Validators.required]],      
          street_number: [this.modal.serviceProvider.street_number, [Validators.required]] ,
          photo: [this.modal.serviceProvider.photo],
          exp_children: [this.modal.serviceProvider.exp_children ?? false],
          exp_elderly: [this.modal.serviceProvider.exp_elderly ?? false],
          exp_disabled: [this.modal.serviceProvider.exp_disabled ?? false],
          qualifications: [this.modal.serviceProvider.qualifications],
          experience: [this.modal.serviceProvider.experience]
        })
  }

  ngOnInit(): void {
    this.user$ = this.loginService.getUserInfo();
    this.isProviderRequirement = this.modal.isProviderRequirement;
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

  closeDialog(){
    this.modalActionService.closeDialog();
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
    if (!this.cookieService.get("token")) {
      this.onError("Faça login para solicitar um cuidador!");
      return;
    }
    
    const file = this.formData.get("photo") as File;
    this.formData = new FormData();
    if (file) {
      this.formData.append("photo", file);
    }
    this.formData.append(
      "service_description",
      this.form.value.service_description
    );
    this.formData.append("exp_children", this.form.value.exp_children);
    this.formData.append("exp_elderly", this.form.value.exp_elderly);
    this.formData.append("exp_disabled", this.form.value.exp_disabled);

    this.formData.append("experience", this.form.value.experience);
    this.formData.append("qualifications", this.form.value.qualifications);    

    this.formData.append("age", this.form.value.age);
    this.formData.append("country", this.form.value.country);
    this.formData.append("state", this.form.value.state);
    this.formData.append("city", this.form.value.city);
    this.formData.append("neighborhood", this.form.value.neighborhood);
    this.formData.append("street", this.form.value.street);
    this.formData.append("street_number", this.form.value.street_number);

    if (this.form.invalid) {
      this.onError("Preencha os campos corretamente!");
      return;
    }

    this.registerProviderService.update(this.formData).subscribe({
      next: () => {
        this.onSuccess("Anúncio alterado com sucesso!");
      },
      error: (error: any) => {
        this.onError("Erro ao alterar anúncio!");
        return;
      },
    });    
    this.closeDialog();
  }

}
