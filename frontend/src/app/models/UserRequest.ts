import { UserRequestStatus } from "./enums/UserRequestStatus";

export interface UserRequest {
  name: string;
  photo: string;
  status: UserRequestStatus;
}
