import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserCard } from "type";

const initialState = {
  selectCards: {
    fromCard: null as unknown as UserCard,
    toCard: null as unknown as UserCard,
  },
  amount: 0,
  errors: {
    isRequireError: false,
    isAmountError: false,
  },
};

export const TransferFormSlice = createSlice({
  name: "transferForm",
  initialState,
  reducers: {
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
    updateTransferAmount: (state, { payload }: PayloadAction<number>) => {
      return { ...state, amount: payload };
    },
    updateTransferErrors: (state) => {
      return {
        ...state,
        errors: {
          isAmountError: state.amount > state.selectCards.fromCard.balance,
          isRequireError: state.amount === 0,
        },
      };
    },
    removeTransferErrors: (state) => {
      return {
        ...state,
        errors: {
          isAmountError: false,
          isRequireError: false,
        },
      };
    },
  },
});

export const {
  updateTransferCards,
  updateTransferAmount,
  updateTransferErrors,
  removeTransferErrors,
} = TransferFormSlice.actions;

export default TransferFormSlice.reducer;
