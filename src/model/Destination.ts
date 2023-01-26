import { reservation } from "./Reservation";

export interface Destination {
  id: number;
  name: string;
  price: number;
  description: string;
  reservation: reservation[];
}
