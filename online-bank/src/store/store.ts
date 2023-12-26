import { configureStore } from "@reduxjs/toolkit";
import { exchangeAPI, productAPI } from "services/api";
import { CardRequestSlice, TransferFormSlice } from "./slice";

export const store = configureStore({
  reducer: {
    cardRequestForm: CardRequestSlice,
    transferForm: TransferFormSlice,
    [productAPI.reducerPath]: productAPI.reducer,
    [exchangeAPI.reducerPath]: exchangeAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      productAPI.middleware,
      exchangeAPI.middleware,
    ]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
