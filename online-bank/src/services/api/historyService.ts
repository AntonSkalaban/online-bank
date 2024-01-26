import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { OperationsData } from "type";

type PaymentType = "favorite" | "history";

export const historyAPI = createApi({
  reducerPath: "historyAPI",
  tagTypes: ["history"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/operations",
  }),
  endpoints: (build) => ({
    getHistory: build.query<OperationsData[], PaymentType | void>({
      query: (paymentType) => "/" + paymentType,
      providesTags: () => ["history"],
    }),
    // getProduct: build.query<
    //   UserCard | UserCredit,
    //   {
    //     productType?: string;
    //     id?: string;
    //   }
    // >({
    //   query: ({ productType, id }) => "/" + productType + "/" + id,
    //   forceRefetch() {
    //     return true;
    //   },
    // }),
    addHistory: build.mutation<OperationsData, Partial<OperationsData>>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
        //  Product.create(productType, body),
      }),
      invalidatesTags: () => ["history"],
    }),
    updateHistory: build.mutation<
      OperationsData,
      {
        body: OperationsData;
      }
    >({
      query: ({ body }) => ({
        url: "/" + body._id,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: () => ["history"],
    }),
  }),
});
