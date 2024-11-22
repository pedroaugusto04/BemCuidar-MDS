export interface ServiceProvider {
  id: string;
  name: string;
  last_name: string;
  age: number;
  state: string;
  country: string;
  city: string;
  photo: string;
  service_description: string;
  favorited?: boolean;
}