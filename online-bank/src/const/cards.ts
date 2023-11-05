import { DefaultCard } from "type/type";

export const cards: DefaultCard[] = [
  {
    paymentSystem: "Visa",
    name: "Visa classic",
    period: 60,
    currency: "USD",
    isVirtual: false,
  },
  {
    paymentSystem: "Visa",
    name: "Visa Gold",
    period: 60,
    currency: "USD",
    isVirtual: false,
  },
  {
    paymentSystem: "Visa",
    name: "Visa classic",
    period: 60,
    currency: "EUR",
    isVirtual: false,
  },
  {
    paymentSystem: "Visa",
    name: "Visa virtual",
    period: 60,
    currency: "USD",
    isVirtual: true,
  },
  {
    paymentSystem: "Visa",
    name: "Visa virtual",
    period: 60,
    currency: "EUR",
    isVirtual: true,
  },

  {
    paymentSystem: "Mastercard",
    name: "Mastercard classic",
    period: 60,
    currency: "USD",
    isVirtual: false,
  },
  {
    paymentSystem: "Mastercard",
    name: "Mastercard classic",
    period: 24,
    currency: "EUR",
    isVirtual: false,
  },
  {
    paymentSystem: "Mastercard",
    name: "Mastercard virtual",
    period: 24,
    currency: "USD",
    isVirtual: true,
  },
  {
    paymentSystem: "Mastercard",
    name: "Mastercard virtual",
    period: 24,
    currency: "EUR",
    isVirtual: true,
  },
];
