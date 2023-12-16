import { createSelector } from "@reduxjs/toolkit";
import { Arr } from "helpers/Arr";
import { RootState } from "store/store";

export const getMapFilters = (state: RootState) => state.map;

export const getMapSelectedFilters = createSelector(getMapFilters, (filters) =>
  Arr.getFromCheckedKeys(filters)
);
