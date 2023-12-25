import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserCard } from "type";

const initialState = {
  selectCards: {
    fromCard: null as unknown as UserCard,
    toCard: null as unknown as UserCard,
  },
  currency: "USD",
  amount: 0,
  hasCheckbox: false,
};

export const TransferFormSlice = createSlice({
  name: "transferForm",
  initialState,
  reducers: {
    initCheckbox: (state) => {
      state.hasCheckbox =
        state.selectCards.fromCard.currency !==
        state.selectCards.toCard.currency;
    },
    updateForm: (
      state,
      { payload }: PayloadAction<Record<string, string | number | boolean>>
    ) => {
      return { ...state, ...payload };
    },
    updateTransferCards: (
      state,
      { payload }: PayloadAction<Record<string, UserCard>>
    ) => {
      return {
        ...state,
        selectCards: {
          ...state.selectCards,
          ...payload,
        },
      };
    },
    clearTransferForm: () => {
      return initialState;
    },
  },
});

export const {
  initCheckbox,
  updateForm,
  updateTransferCards,
  clearTransferForm,
} = TransferFormSlice.actions;

export default TransferFormSlice.reducer;
