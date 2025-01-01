import { UserRequestStatus } from "./enums/UserRequestStatus";

/**
 * Este modelo eh pra ser utilizado primariamente pelo cliente quando verificando
 * as informacoes dos pedidos que ele fez para cuidadores, por isso ele inclui
 * informacao sobre o cuidador tambem
 * 
 * prefixo prv_: significa que eh informacao do cuidador/provider
 * prefixo req_: significa que eh informacao do pedido/request
 * -@pejacome
 */

export interface UserRequest {
  req_id: string;
  req_create_time: EpochTimeStamp;
  req_status: UserRequestStatus;
  req_name: string;
  req_email: string;
  req_address: string;
  req_phone: string;
  req_photo: string;
  prv_id: string;
  prv_name: string;
  prv_age: number;
  prv_state: string;
  prv_country: string;
  prv_city: string;
  prv_photo: string;
  prv_service_description: string;
  prv_favorited: boolean;
}