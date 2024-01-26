import { configureStore } from "@reduxjs/toolkit";
import { exchangeAPI, historyAPI, productAPI } from "services/api";

export const store = configureStore({
  reducer: {
    [productAPI.reducerPath]: productAPI.reducer,
    [historyAPI.reducerPath]: historyAPI.reducer,
    [exchangeAPI.reducerPath]: exchangeAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      productAPI.middleware,
      historyAPI.middleware,
      exchangeAPI.middleware,
    ]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
