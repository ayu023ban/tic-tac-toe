import { AnyAction } from "redux";
import { SOUNDS } from "../../constants";
import { soundActions } from "./actions";

const soundTypes = Object.values(SOUNDS);
type SoundType = typeof soundTypes[number] | null;
type reducerType = {
  soundType: SoundType;
};
const initialState: reducerType = {
  soundType: null,
};

export type soundsActionType = { type: string; soundType: SoundType };

export default function result(state = initialState, action: soundsActionType) {
  const { type, soundType } = action;
  switch (type) {
    case soundActions.SOUND_TYPE:
      return { ...state, soundType: soundType };
    default:
      return state;
  }
}
