import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  updateCardFilter,
  updateTransferCards,
  clearTransferForm,
  initCheckbox,
  updateForm,
  submitRequestForm,
  updateMapFilter,
} from "store/slice";

const actions = {
  updateCardFilter,
  updateTransferCards,
  submitRequestForm,
  clearTransferForm,
  initCheckbox,
  updateForm,
  updateMapFilter,
};

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
