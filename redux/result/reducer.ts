import { RESULT_TYPE } from "../../constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { resultType } from "../../utils/types";

type initialStateType = {
  result: resultType;
};

const initialState = {
  result: RESULT_TYPE.NOT_DECLARED,
} as initialStateType;

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setResult(state, { payload }: PayloadAction<resultType>) {
      state.result = payload;
    },
  },
});

export const { setResult } = resultSlice.actions;

export default resultSlice.reducer;
