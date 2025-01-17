export interface ServiceRequest {
    id: string;
    user_id: string;
    provider_id: string;
    create_time: EpochTimeStamp;
    status: string;
    req_name: string;
    req_email: string;
    req_address: string;
    req_phone: string;
    req_photo: string;
    req_city: string;
  }  