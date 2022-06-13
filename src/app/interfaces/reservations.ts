import {Car} from "./car";

export interface Reservations {
  id: number;
  startDate?: string;
  endDate?: string;
  car?: string;
  user?: string;
}

