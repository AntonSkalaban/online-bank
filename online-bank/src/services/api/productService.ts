import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createProduct, getRandomNumber } from "helpers";
import { Credit, UserCard, DefaultCard } from "type/type";

export const productAPI = createApi({
  reducerPath: "productAPI",
  tagTypes: ["credits", "cards", "deposits"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/products",
  }),
  endpoints: (build) => ({
    getProducts: build.query<
      UserCard[] | Credit[],
      "credits" | "cards" | "deposits"
    >({
      query: (productType) => "/" + productType,
      providesTags: (_result, _error, arg) => [arg],
    }),
    addProducts: build.mutation<
      UserCard | Credit,
      {
        productType: "credits" | "cards" | "deposits";
        body: DefaultCard | Credit;
      }
    >({
      query: ({ productType, body }) => ({
        url: "/" + productType,
        method: "POST",
        body: createProduct(productType, body),
      }),
      invalidatesTags: (_result, _error, arg) => [arg.productType],
    }),
  }),
});
