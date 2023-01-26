import { Destination } from "./Destination";

export interface City {
  id: number;
  name: string;
  population: number;
  country_id: number;
  destination: Destination[];
}
