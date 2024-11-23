import { Component } from "@angular/core";
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterLink } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { first } from "rxjs";
import { RegisterService } from "./service/register.service";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterLink,
    MatIconModule,
    NavBarComponent
  ],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent {
  visibility: boolean = false;
  password: string = "password";
  hasError: string = "";

  form!: FormGroup;

  constructor(private formBuilder: NonNullableFormBuilder, private registerService: RegisterService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  formErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);
    if (field?.hasError("required")) {
      return "Este campo é necessário";
    }
    if (field?.hasError("email")) {
      return "Endereço de email inválido";
    }
    if (field?.hasError("whitespace")) {
      return "O campo não pode conter apenas espaços em branco.";
    }
    if (field?.hasError("minlength")) {
      return `O campo está muito curto`;
    }
    return;
  }

  onClick() {
    this.visibility = !this.visibility;
    if (this.password === "text") {
      this.password = "password";
    } else if (this.password === "password") {
      this.password = "text";
    }
  }

  signUp() {
    if (this.form.invalid) {
      this.onError();
      return;
    }
    this.registerService
      .save(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.onSuccess();
        },
        error: (error: any) => {
          this.onError();
        },
      });
  }

  onSuccess() {
    console.log("foi");
  }

  onError(){
    console.log("erro");
  }
}
