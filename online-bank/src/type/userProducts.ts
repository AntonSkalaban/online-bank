import { DefaultCard, DefaultProduct } from "./defaultProducts";

export interface UserProduct extends DefaultProduct {
  _id: string;
  date: Date;
}

export interface UserCard extends UserProduct, DefaultCard {
  balance: number;
  number: string;
  cvv: string;
}

export interface UserCredit extends UserProduct {
  balance: number;
  rate: number;
}

export interface UserDeposit extends UserProduct {
  balance: number;
  rate: number;
}
