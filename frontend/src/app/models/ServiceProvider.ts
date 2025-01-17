export interface ServiceProvider {
  id: string;
  name: string;
  service_description?: string;
  age?: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  coords_lon?: number;
  coords_lat?: number;
  photo?: string;
  favorited?: boolean;
}
