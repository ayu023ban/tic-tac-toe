import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  profile: { name: "player1" },
};

const playerSlice = createSlice({
  name: "player2",
  initialState,
  reducers: {
    setPlayer2Name(state, action: PayloadAction<string>) {
      state.profile.name = action.payload;
    },
  },
});

export const { setPlayer2Name } = playerSlice.actions;

export default playerSlice.reducer;
