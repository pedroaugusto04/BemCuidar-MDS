export interface ServiceProvider {
  id: string;
  name: string;
  service_description?: string;
  age?: string;
  country?: string;
  state?: string;
  city?: string;
  neighborhood?: string;
  street?: string;
  street_number?: string;
  coords_lon?: number;
  coords_lat?: number;
  photo?: string;
  favorited?: boolean;
}
