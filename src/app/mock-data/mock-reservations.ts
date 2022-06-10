import { Reservations } from "./reservations";
import { CARS } from "./mock-cars";
import { USERS } from "./mock-users";

export const RESERVATIONS: Reservations[] = [
  {id: 1, startDate: "01-01-2022", endDate:"02-01-2022", car: CARS[0].brand + ' ' + CARS[0].model, user: USERS[0].email},
  {id: 2, startDate: "03-01-2022", endDate:"04-01-2022", car: CARS[1].brand + ' ' + CARS[1].model, user: USERS[1].email},
  {id: 3, startDate: "05-01-2022", endDate:"06-01-2022", car: CARS[2].brand + ' ' + CARS[2].model, user: USERS[2].email},
  {id: 4, startDate: "07-01-2022", endDate:"08-01-2022", car: CARS[3].brand + ' ' + CARS[3].model, user: USERS[3].email},
  {id: 5, startDate: "09-01-2022", endDate:"10-01-2022", car: CARS[4].brand + ' ' + CARS[4].model, user: USERS[4].email},
  {id: 6, startDate: "11-01-2022", endDate:"12-01-2022", car: CARS[5].brand + ' ' + CARS[5].model, user: USERS[5].email},
];
