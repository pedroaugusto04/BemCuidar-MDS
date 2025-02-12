import { Component } from "@angular/core";
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Router, RouterLink } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { first } from "rxjs";
import { RegisterService } from "../../services/userServices/register.service";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: "app-register",
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterLink,
    MatIconModule,
    NavBarComponent,
    MatButtonModule,
  ],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent {
  visibility: boolean = false;
  password: string = "password";
  hasError: string = "";

  form!: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private registerService: RegisterService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      last_name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      password_repeat: ["", [Validators.required, Validators.minLength(8)]],
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
      this.onError("Preencha os campos corretamente!");
      return;
    }
    if(this.form.value.password != this.form.value.password_repeat){
      this.onError("Senha não é igual nos campos 'Senha' e 'Confirmar Senha'");
      return;
    }
    this.registerService
      .save(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => this.onSuccess("Cadastro realizado com sucesso!"),
        error: () => this.onError("Não foi possível realizar o cadastro!"),
      });
  }

  onSuccess(msg: string) {
    this.snackBar.open(msg, "X", {
      duration: 1000,
      verticalPosition: "top",
      panelClass: ["success-snackbar"],
    });

    setTimeout(() => {
      this.router.navigateByUrl("/login");
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
