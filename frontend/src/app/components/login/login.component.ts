import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginService } from './service/login.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,MatIconModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule, NavBarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {

  visibility: boolean = false;
  password: string = "password";
  loading: boolean = false;
  hasError: string = "";

  form!: FormGroup;


  constructor(
    private formBuilder: NonNullableFormBuilder,
    private loginService: LoginService,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
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

  login() {
    if (this.form.invalid) {
      this.onError();
      return;
    }
    this.loading = true;
    this.loginService.authenticate(this.form).subscribe({
      next: (result: boolean) => {
        if (result) {
          this.onSuccess();
        } else {
          this.onError();
        }
      },
      error: () => {
        this.onError();
      },
    });
  }

  onSuccess() {
    console.log("ok");
  }

  onError() {
    console.log("erro");
  }
}