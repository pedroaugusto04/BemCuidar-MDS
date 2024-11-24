export interface ServiceProvider {
  id: string;
  name: string;
  service_description: string;
  age: string;
  country: string;
  state: string;
  city: string;
  photo?: string;
  favorited?: boolean;
}
