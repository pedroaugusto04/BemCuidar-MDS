import { Observable, of } from 'rxjs';
import { ServiceProvider } from '../../../models/ServiceProvider';

export const providersMock: ServiceProvider[] = [
  {
    id: "1",
    name: "Nome1",
    service_description: "Work1",
    age: "20",
    country: "Brasil",
    state: "Minas Gerais",
    city: "Ipatinga",
    photo: ""
  },
  {
    id: "2",
    name: "Nome2",
    service_description: "Work2",
    age: "21",
    country: "Brasil",
    state: "Minas Gerais",
    city: "Ipatinga",
    photo: ""
  },
  {
    id: "3",
    name: "Nome3",
    service_description: "Work3",
    age: "22",
    country: "Inglaterra",
    state: "Minas Gerais",
    city: "Ipatinga",
    photo: ""
  },
];