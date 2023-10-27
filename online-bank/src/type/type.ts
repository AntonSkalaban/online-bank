export interface Card {
  paymentSystem: "Visa" | "Mastercard";
  name: string;
  date: Date;
  period: number;
  currency: "USD" | "EUR";
  balance: number;
  number: number;
  cvv: number;
}

export interface Credit {
  name: string;
  date: Date;
  period: number;
  currency: "USD" | "EUR";
  balance: number;
  rate: number;
}
