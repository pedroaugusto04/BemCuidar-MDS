export interface ServiceProvider { 
    id: string;
    name: string;
    service_description: string;
    age: number;
    country: string;
    state: string;
    city: string;
    photo: string;
    favorited?: boolean
}
