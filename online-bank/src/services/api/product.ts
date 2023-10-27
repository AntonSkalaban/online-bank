import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Card } from "type/type";

export const productAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/products",
  }),
  endpoints: (build) => ({
    getProducts: build.query<Card[], void>({
      query: (productType) => "/" + productType,
    }),
  }),
});
