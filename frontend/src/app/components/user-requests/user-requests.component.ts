import { Component } from "@angular/core";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { Observable } from "rxjs";
import { UserRequest } from "../../models/UserRequest";
import { UserService } from "../../services/userServices/user.service";
import { CommonModule } from "@angular/common";
import { CardUserRequestComponent } from "../card-user-request/card-user-request.component";

@Component({
  selector: "app-user-requests",
  standalone: true,
  imports: [NavBarComponent, CommonModule, CardUserRequestComponent],
  templateUrl: "./user-requests.component.html",
  styleUrl: "./user-requests.component.scss",
})
export class UserRequestsComponent {
  requests$!: Observable<UserRequest[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.requests$ = this.userService.getUserRequests();
  }
}
