import { Component } from "@angular/core";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { ServiceProvider } from "../../models/ServiceProvider";
import { CardServiceProviderComponent } from "../card-service-provider/card-service-provider.component";

@Component({
  selector: "app-list",
  standalone: true,
  imports: [
    NavBarComponent,
    CardServiceProviderComponent,
    MatCardModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: "./list-provider.component.html",
  styleUrl: "./list-provider.component.scss",
})
export class ListComponent {
  providers: ServiceProvider[] = this.testData();

  testData(): ServiceProvider[] {
    const t1: ServiceProvider = {
      name: "Nome1",
      service: "Work1",
      age: 20,
      country:"Brasil",
      state:"Minas Gerais",
      city:"Ipatinga"
    };
    const t2: ServiceProvider = {
      name: "Nome2",
      service: "Work2",
      age: 20,
      country:"Brasil",
      state:"Minas Gerais",
      city:"Ipatinga"
    };
    const t3: ServiceProvider = {
      name: "Nome3",
      service: "Work3",
      age: 20,
      country:"Brasil",
      state:"Minas Gerais",
      city:"Ipatinga"
    };
    const t4: ServiceProvider = {
      name: "Nome1",
      service: "Work1",
      age: 20,
      country:"Brasil",
      state:"Minas Gerais",
      city:"Ipatinga"
    };
    const t5: ServiceProvider = {
      name: "Nome2",
      service: "Work2",
      age: 20,
      country:"Brasil",
      state:"Minas Gerais",
      city:"Ipatinga"
    };
    const t6: ServiceProvider = {
      name: "Nome3",
      service: "Work3",
      age: 20,
      country:"Brasil",
      state:"Minas Gerais",
      city:"Ipatinga"
    };
    const t7: ServiceProvider = {
      name: "Nome1",
      service: "Work1",
      age: 20,
      country:"Brasil",
      state:"Minas Gerais",
      city:"Ipatinga"
    };
    const t8: ServiceProvider = {
      name: "Nome2",
      service: "Work2",
      age: 20,
      country:"Brasil",
      state:"Minas Gerais",
      city:"Ipatinga"
    };
    const t9: ServiceProvider = {
      name: "Nome3",
      service: "Work3",
      age: 20,
      country:"Brasil",
      state:"Minas Gerais",
      city:"Ipatinga"
    };
    const providers: ServiceProvider[] = [t1, t2, t3, t4, t5, t6, t7, t8];
    return providers;
  }
}
