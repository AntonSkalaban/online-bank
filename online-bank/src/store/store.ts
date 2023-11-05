import { configureStore } from "@reduxjs/toolkit";
import { productAPI } from "services/api";
import CardParamsSlice from "./slice/CardFilterSlice";

export const store = configureStore({
  reducer: {
    card: CardParamsSlice,
    [productAPI.reducerPath]: productAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([productAPI.middleware]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
