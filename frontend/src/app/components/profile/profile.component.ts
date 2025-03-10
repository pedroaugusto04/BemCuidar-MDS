import { Component } from "@angular/core";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [NavBarComponent, MatButtonModule, MatIcon, RouterLink],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.scss",
  
})
export class ProfileComponent {
  constructor() {}
}
