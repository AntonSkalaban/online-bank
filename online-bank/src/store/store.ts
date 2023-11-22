import { configureStore } from "@reduxjs/toolkit";
import { productAPI } from "services/api";
import { DefCardParamsSlice, TransferFormSlice } from "./slice";

export const store = configureStore({
  reducer: {
    card: DefCardParamsSlice,
    transferForm: TransferFormSlice,
    [productAPI.reducerPath]: productAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([productAPI.middleware]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
