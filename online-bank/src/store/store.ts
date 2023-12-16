import { configureStore } from "@reduxjs/toolkit";
import { exchangeAPI, productAPI } from "services/api";
import { DefCardParamsSlice, MapSlice, TransferFormSlice } from "./slice";

export const store = configureStore({
  reducer: {
    card: DefCardParamsSlice,
    transferForm: TransferFormSlice,
    map: MapSlice,
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
