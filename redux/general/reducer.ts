import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { directionType, pageType } from "../../utils/types";

type reducerType = {
  page: pageType;
  direction: directionType;
};
const initialState: reducerType = {
  page: "modeSelect",
  direction: "right2left",
};

const soundSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    selectPage(state, { payload }: PayloadAction<pageType>) {
      state.page = payload;
    },
    setDirection(state, { payload }: PayloadAction<directionType>) {
      state.direction = payload;
    },
  },
});

export const { selectPage, setDirection } = soundSlice.actions;

export default soundSlice.reducer;
