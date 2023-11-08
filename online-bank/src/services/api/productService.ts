import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createProduct } from "helpers";
import { UserCredit, UserCard, DefaultCard, ProdyctType } from "type";

export const productAPI = createApi({
  reducerPath: "productAPI",
  tagTypes: ["credits", "cards", "deposits"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/products",
  }),
  endpoints: (build) => ({
    getProducts: build.query<UserCard[] | UserCredit[], ProdyctType>({
      query: (productType) => "/" + productType,
      providesTags: (_result, _error, arg) => [arg],
    }),
    getProduct: build.query<
      UserCard | UserCredit,
      {
        productType: string;
        id: string;
      }
    >({
      query: ({ productType, id }) => "/" + productType + "/" + id,
    }),
    addProducts: build.mutation<
      UserCard | UserCredit,
      {
        productType: ProdyctType;
        body: DefaultCard | UserCredit;
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
