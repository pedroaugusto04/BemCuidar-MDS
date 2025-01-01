export interface UserRequest {
  req_id: string;
  req_create_time: EpochTimeStamp;
  req_status: string;
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