import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isMute: false,
  volumeLevel: 1,
  animation: true,
};

const settingSlice = createSlice({
  name: "player2",
  initialState,
  reducers: {
    mute(state) {
      state.isMute = true;
    },
    unmute(state) {
      state.isMute = false;
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volumeLevel = action.payload;
    },
    enableAnimation(state) {
      state.animation = true;
    },
    disableAnimation(state) {
      state.animation = false;
    },
  },
});

export const {
  mute,
  unmute,
  setVolume,
  enableAnimation,
  disableAnimation,
} = settingSlice.actions;

export default settingSlice.reducer;
