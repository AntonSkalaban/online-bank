export interface DefaultCard {
  paymentSystem: "Visa" | "Mastercard";
  name: string;
  period: number;
  currency: "USD" | "EUR";
  isVirtual: boolean;
}

export interface UserCard extends DefaultCard {
  _id: string;
  date: Date;
  balance: number;
  number: string;
  cvv: string;
}

export interface Credit {
  _id: string;
  name: string;
  date: Date;
  period: number;
  currency: "USD" | "EUR";
  balance: number;
  rate: number;
}
