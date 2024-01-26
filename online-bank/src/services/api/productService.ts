import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Product } from "helpers";
import {
  UserCredit,
  UserCard,
  DefaultCard,
  ProdyctType,
  UserDeposit,
} from "type";

export const productAPI = createApi({
  reducerPath: "productAPI",
  tagTypes: ["credits", "cards", "deposits"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/products",
  }),
  endpoints: (build) => ({
    getProducts: build.query<
      UserCard[] | UserCredit[] | UserDeposit[],
      ProdyctType
    >({
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
      forceRefetch() {
        return true;
      },
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
        body: Product.create(productType, body),
      }),
      invalidatesTags: (_result, _error, arg) => [arg.productType],
    }),
    updateProduct: build.mutation<
      UserCard | UserCredit,
      {
        productType: ProdyctType;
        body: UserCard | UserCredit;
        newParams: Record<string, string | number>;
      }
    >({
      query: ({ productType, body, newParams }) => ({
        url: "/" + productType + "/" + body._id,
        method: "PUT",
        body: Product.update(body, newParams),
      }),
      invalidatesTags: (_result, _error, arg) => [arg.productType],
    }),
  }),
});
