import { UserCard } from "./userProducts";

export type FormValues = Record<string, string | number | boolean>;
export interface ICardButton {
  title: string;
  img: string;
  route: string;
}

export interface ExchangeInfo {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: {
    [key: string]: {
      ID: string;
      NumCode: string;
      CharCode: string;
      Nominal: number;
      Name: string;
      Value: number;
      Previous: number;
    };
  };
}

export interface Tab {
  title: string;
  name: string;
}

export interface OperationsData {
  _id: string;
  name: string;
  date: Date;
  category: string;
  topUpBy: "card" | "phone";
  fromCard: UserCard;
  topUpNumber: string;
  amount: string;
  isFavorite?: boolean;
}
