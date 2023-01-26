import { City } from "./City";

export interface Country {
  id: number;
  name: string;
  capital: string;
  population: number;
  area: number;
  continent: string;
  averageTouristInAYear: number;
  imageSrc: string;
  description: string;
  cities: City[];
}
