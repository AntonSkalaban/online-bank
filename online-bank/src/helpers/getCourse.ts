import { Currency, ExchangeInfo } from "type";

export const getCourse = (
  data: ExchangeInfo,
  curr1: Currency,
  curr2: Currency
) => {
  return data.Valute[curr1].Value / data.Valute[curr2].Value;
};
