import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Card, Credit } from "type/type";

export const productAPI = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/products",
  }),
  endpoints: (build) => ({
    getProducts: build.query<Card[] | Credit[], string>({
      query: (productType) => "/" + productType,
    }),
  }),
});
