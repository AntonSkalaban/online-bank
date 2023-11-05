import { DefaultCard } from "type/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: DefaultCard = {
  paymentSystem: "Visa",
  name: "",
  period: 0,
  currency: "USD",
  isVirtual: false,
};

export const CardFilterSlice = createSlice({
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

export const { updateCardFilter } = CardFilterSlice.actions;

export default CardFilterSlice.reducer;
