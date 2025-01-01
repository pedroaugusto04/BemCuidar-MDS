export interface ServiceProvider {
  id: string;
  create_time: EpochTimeStamp;
  name: string;
  age: number;
  state: string;
  country: string;
  city: string;
  photo: string;
  service_description: string;
  favorited?: boolean;
}