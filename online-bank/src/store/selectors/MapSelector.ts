import { createSelector } from "@reduxjs/toolkit";
import { CustomeArray } from "helpers";
import { RootState } from "store/store";

export const getMapFilters = (state: RootState) => state.map;

export const getMapSelectedFilters = createSelector(getMapFilters, (filters) =>
  CustomeArray.getFromCheckedKeys(filters)
);
