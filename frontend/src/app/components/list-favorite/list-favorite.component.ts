import { Component, OnInit } from "@angular/core";
import { ServiceProvider } from "../../models/ServiceProvider";
import { ProviderService } from "../../services/providerServices/provider.service";
import { Observable } from "rxjs";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { CardServiceProviderComponent } from "../card-service-provider/card-service-provider.component";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card";
import { User } from "../../models/User";
import { UserService } from "../../services/userServices/user.service";

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
    CommonModule,
  ],
  templateUrl: "./list-favorite.component.html",
  styleUrl: "./list-favorite.component.scss",
})
export class ListFavoriteComponent implements OnInit{
  user$!: Observable<User>;
  favoriteProviders$!: Observable<ServiceProvider[]>;

  constructor(private providerService: ProviderService, private userService: UserService) {}
  
  ngOnInit(): void {
  this.user$ = this.userService.getUserInfo();
  if (this.user$){
    this.favoriteProviders$ = this.providerService.getFavoritedProviders();
  }
  }
}
