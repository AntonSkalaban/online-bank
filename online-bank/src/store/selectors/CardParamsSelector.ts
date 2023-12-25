import { RootState } from "store/store";

export const getCardParams = (state: RootState) =>
  state.cardRequestForm.cardParams;

export const getRequestFormStatus = (state: RootState) =>
  state.cardRequestForm.isSubmit;
