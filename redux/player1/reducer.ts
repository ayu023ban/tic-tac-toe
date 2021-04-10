import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  profile: { name: "player1" },
  score: 0,
};

const player1Slice = createSlice({
  name: "player1",
  initialState,
  reducers: {
    setPlayer1Name(state, action: PayloadAction<string>) {
      state.profile.name = action.payload;
    },
    setPlayer1Score(state, { payload }: PayloadAction<number>) {
      state.score = payload;
    },
  },
});

export const { setPlayer1Name, setPlayer1Score } = player1Slice.actions;

export default player1Slice.reducer;
