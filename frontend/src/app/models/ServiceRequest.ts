import { UserRequestStatus } from "./enums/UserRequestStatus";

/**
 * Este modelo eh pra ser utilizado primariamente pelo
 * cuidador quando manageando seus pedidos
 * 
 * Assim como no modelo ServiceProvider, quando req_photo
 * for uma string vazia, o usuario nao colocou uma foto.
 * -@pejacome
 */

export interface ServiceRequest {
    id: string;
    user_id: string;
    provider_id: string;
    create_time: EpochTimeStamp;
    status: UserRequestStatus;
    req_name: string;
    req_email: string;
    req_address: string;
    req_phone: string;
    req_photo: string;
    req_information: string;
}  