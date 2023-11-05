import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { updateCardFilter } from "store/slice";

const actions = {
  updateCardFilter,
};

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
