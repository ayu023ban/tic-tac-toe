import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gameLevelType, player2ModeType } from "../../utils/types";
const initialState = {
  profile: { name: "player2" },
  mode: "computer" as player2ModeType,
  gameLevel: "Medium" as gameLevelType,
};

const playerSlice = createSlice({
  name: "player2",
  initialState,
  reducers: {
    setPlayer2Name(state, action: PayloadAction<string>) {
      state.profile.name = action.payload;
    },
    setGameLevel(state, { payload }: PayloadAction<gameLevelType>) {
      state.gameLevel = payload;
    },
  },
});

export const { setPlayer2Name } = playerSlice.actions;

export default playerSlice.reducer;
