export interface User {
    id?: string;
    create_time: EpochTimeStamp;
    name: string;
    last_name: string;
    email: string;
    password: string;
  }