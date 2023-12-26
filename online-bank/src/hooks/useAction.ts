import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  updateCardFilter,
  updateTransferCards,
  clearTransferForm,
  initCheckbox,
  updateForm,
  submitRequestForm,
} from "store/slice";

const actions = {
  updateCardFilter,
  updateTransferCards,
  submitRequestForm,
  clearTransferForm,
  initCheckbox,
  updateForm,
};

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
