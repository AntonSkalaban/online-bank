import { exchangeAPI } from "services/api";
import { Course } from "helpers";
import { Currency } from "type";

export const useGetCourse = (
  curr1: Currency | undefined,
  curr2: Currency | undefined,
  isCurrent = true
) => {
  const { data } = exchangeAPI.useGetExchangeRatesQuery();

  if (curr1 && curr2 && data) return Course.get(data, curr1, curr2, isCurrent);
};
