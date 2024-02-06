import { DefaultCredit } from "type";
import Car from "assets/png/car.avif";
import House from "assets/png/house.jpeg";

export const credits: DefaultCredit[] = [
  {
    name: "Real estate loan",
    img: House,
    rate: 6,
    maxSum: 1000000,
    period: 240,
    currency: "USD",
  },
  {
    name: 'Car loan "Buy a car online"',
    img: Car,
    rate: 8,
    maxSum: 60000,
    period: 84,
    currency: "USD",
  },
];
