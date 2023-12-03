import { getCourse } from "helpers/getCourse";
import { exchangeAPI } from "services/api";
import { Currency } from "type";

export const useGetCourse = (
  curr1: Currency | undefined,
  curr2: Currency | undefined
) => {
  const { data } = exchangeAPI.useGetExchangeRatesQuery();

  if (curr1 && curr2 && data) return getCourse(data, curr1, curr2);
};
