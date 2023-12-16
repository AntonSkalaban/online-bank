import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  updateCardFilter,
  updateTransferCards,
  updateTransferErrors,
  removeTransferErrors,
  clearTransferForm,
  initCheckbox,
  updateForm,
  updateMapFilter,
} from "store/slice";

const actions = {
  updateCardFilter,
  updateTransferCards,
  updateTransferErrors,
  removeTransferErrors,
  clearTransferForm,
  initCheckbox,
  updateForm,
  updateMapFilter,
};

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
