import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pageType } from "../../utils/types";

type reducerType = {
  page: pageType;
};
const initialState: reducerType = {
  page: "modeSelect",
};

const soundSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    selectPage(state, { payload }: PayloadAction<pageType>) {
      state.page = payload;
    },
  },
});

export const { selectPage } = soundSlice.actions;

export default soundSlice.reducer;
