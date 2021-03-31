import { RESULT_TYPE } from "../../constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const resultTypes = Object.values(RESULT_TYPE);
type resultType = typeof resultTypes[number];

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
    win(state) {
      state.result = RESULT_TYPE.PLAYER_1_WIN;
    },
    lose(state) {
      state.result = RESULT_TYPE.PLAYER_2_WIN;
    },
    tie(state) {
      state.result = RESULT_TYPE.TIE;
    },
    reset(state) {
      state.result = RESULT_TYPE.NOT_DECLARED;
    },
  },
});

export const { win, lose, tie, reset } = resultSlice.actions;

export default resultSlice.reducer;
