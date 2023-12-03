import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ExchangeInfo } from "type";

export const exchangeAPI = createApi({
  reducerPath: "exchangeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.cbr-xml-daily.ru/daily_json.js",
  }),
  endpoints: (build) => ({
    getExchangeRates: build.query<ExchangeInfo, void>({
      query: () => "",
    }),
  }),
});
