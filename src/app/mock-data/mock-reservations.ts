import { Reservations } from "./reservations";
import { CARS } from "./mock-cars";
import { USERS } from "./mock-users";

export const RESERVATIONS: Reservations[] = [

  {startDate: "01-01-2022", endDate:"02-01-2022", car: CARS[0], user: USERS[0]},
  {startDate: "03-01-2022", endDate:"04-01-2022", car: CARS[1], user: USERS[1]},
  {startDate: "05-01-2022", endDate:"06-01-2022", car: CARS[2], user: USERS[2]},
  {startDate: "07-01-2022", endDate:"08-01-2022", car: CARS[3], user: USERS[3]},
  {startDate: "09-01-2022", endDate:"10-01-2022", car: CARS[4], user: USERS[4]},
  {startDate: "11-01-2022", endDate:"12-01-2022", car: CARS[5], user: USERS[5]},

];
