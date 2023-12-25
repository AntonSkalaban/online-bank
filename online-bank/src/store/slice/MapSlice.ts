import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const MapSlice = createSlice({
  name: "map",
  initialState: { banks: true, atms: true },
  reducers: {
    updateMapFilter: (
      state,
      { payload }: PayloadAction<{ string: boolean }>
    ) => {
      return { ...state, ...payload };
    },
  },
});

export const { updateMapFilter } = MapSlice.actions;

export default MapSlice.reducer;
