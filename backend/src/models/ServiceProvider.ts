export interface ServiceProvider {
  id: string;
  create_time: EpochTimeStamp;
  name: string;
  age: number;
  state: string;
  country: string;
  city: string;
  neighborhood: string;
  street: string;
  street_number: string;
  coords_lon: number;
  coords_lat: number;
  photo: string;
  service_description: string;
  favorited?: boolean;
}