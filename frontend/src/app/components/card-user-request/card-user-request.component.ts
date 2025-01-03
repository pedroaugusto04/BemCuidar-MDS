import { Component, Input } from "@angular/core";
import { UserRequestStatus } from "../../models/enums/UserRequestStatus";
import { ServiceProvider } from "../../models/ServiceProvider";
import { UserRequest } from "../../models/UserRequest";

@Component({
  selector: "app-card-user-request",
  standalone: true,
  imports: [],
  templateUrl: "./card-user-request.component.html",
  styleUrl: "./card-user-request.component.scss",
})
export class CardUserRequestComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) photo!: string;
  @Input({ required: true }) status!: string;

  userRequest!: UserRequest;

  ngOnInit(): void {
    this.userRequest = {
      req_name: this.name,
      req_photo: this.photo,
      req_status: this.status as UserRequestStatus,
    };
  }
}
