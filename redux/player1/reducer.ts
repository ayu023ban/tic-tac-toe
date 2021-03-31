import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  profile: { name: "player1" },
};

const player1Slice = createSlice({
  name: "player1",
  initialState,
  reducers: {
    setPlayer1Name(state, action: PayloadAction<string>) {
      state.profile.name = action.payload;
    },
  },
});

export const { setPlayer1Name } = player1Slice.actions;

export default player1Slice.reducer;
