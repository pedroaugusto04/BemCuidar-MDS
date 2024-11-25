import { Component, Input } from "@angular/core";
import { UserRequest } from "../../models/UserRequest";
import { UserRequestStatus } from "../../models/enums/UserRequestStatus";

@Component({
  selector: "app-card-user-request",
  standalone: true,
  imports: [],
  templateUrl: "./card-user-request.component.html",
  styleUrl: "./card-user-request.component.scss",
})
export class CardUserRequestComponent {
  @Input({ required: true }) id_user!: string;
  @Input({ required: true }) id_provider!: string;
  @Input({ required: true }) status!: string;

  userRequest!: UserRequest;

  ngOnInit(): void {
    this.userRequest = {
      id_user: this.id_user,
      id_provider: this.id_provider,
      status: this.status as UserRequestStatus,
    };
  }
}
