import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SOUNDS } from "../../constants";

const soundTypes = Object.values(SOUNDS);
type SoundType = typeof soundTypes[number] | null;
type reducerType = {
  soundType: SoundType;
};
const initialState: reducerType = {
  soundType: null,
};

const soundSlice = createSlice({
  name: "sounds",
  initialState,
  reducers: {
    playSound(state, { payload }: PayloadAction<SoundType>) {
      state.soundType = payload;
    },
    resetSound(state) {
      state.soundType = null;
    },
  },
});

export const {
  playSound,resetSound
} = soundSlice.actions;

export default soundSlice.reducer;
