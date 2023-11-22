import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  updateCardFilter,
  updateTransferCards,
  updateTransferAmount,
  updateTransferErrors,
  removeTransferErrors,
} from "store/slice";

const actions = {
  updateCardFilter,
  updateTransferCards,
  updateTransferAmount,
  updateTransferErrors,
  removeTransferErrors,
};

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
