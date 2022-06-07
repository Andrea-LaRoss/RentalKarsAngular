import { Car } from "./car";
import { User } from "./user";

export interface Reservations {
  startDate: string;
  endDate: string;
  car: Car;
  user: User;
}

