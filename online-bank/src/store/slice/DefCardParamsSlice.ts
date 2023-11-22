import { DefaultCard } from "type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: DefaultCard = {
  paymentSystem: "Visa",
  name: "",
  period: 0,
  currency: "USD",
  isVirtual: false,
};

export const DefCardParamsSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    updateCardFilter: (
      state,
      { payload }: PayloadAction<Record<string, string | number | boolean>>
    ) => {
      return { ...state, ...payload };
    },
  },
});

export const { updateCardFilter } = DefCardParamsSlice.actions;

export default DefCardParamsSlice.reducer;
