import { DefaultCard } from "type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CardRequestForm {
  cardParams: DefaultCard;
  isSubmit: boolean;
}
const initialState: CardRequestForm = {
  cardParams: {
    paymentSystem: "Visa",
    name: "",
    period: 0,
    currency: "USD",
    isVirtual: false,
  },
  isSubmit: false,
};

export const CardRequestSlice = createSlice({
  name: "cardRequest",
  initialState,
  reducers: {
    updateCardFilter: (
      state,
      { payload }: PayloadAction<Record<string, string | number | boolean>>
    ) => {
      return { ...state, cardParams: { ...state.cardParams, ...payload } };
    },
    submitRequestForm: (state, { payload }: PayloadAction<boolean>) => {
      return { ...state, isSubmit: payload };
    },
  },
});

export const { updateCardFilter, submitRequestForm } = CardRequestSlice.actions;

export default CardRequestSlice.reducer;
