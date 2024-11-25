import { UserRequestStatus } from "./enums/UserRequestStatus";

export interface UserRequest {
  id_user: string;
  id_provider: string;
  status: UserRequestStatus;
}
