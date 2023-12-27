import { configureStore } from "@reduxjs/toolkit";
import { exchangeAPI, productAPI } from "services/api";

export const store = configureStore({
  reducer: {
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
