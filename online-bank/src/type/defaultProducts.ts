import { prodyctsType, currency, paymentSystem } from "const";

export type ProdyctType = (typeof prodyctsType)[number];
export type PaymentSystem = (typeof paymentSystem)[number];
export type Currency = (typeof currency)[number];

export interface DefaultProduct {
  name: string;
  period: number;
  currency: Currency;
}

export interface DefaultCard extends DefaultProduct {
  paymentSystem: PaymentSystem;
  isVirtual: boolean;
}

export interface DefaultCredit extends DefaultProduct {
  img: string;
  name: string;
  rate: number;
  maxSum: number;
}
