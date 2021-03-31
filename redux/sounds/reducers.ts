import { AnyAction } from "redux";
import { SOUNDS } from "../../constants";
import { soundActionTypes } from "./actions";

const soundTypes = Object.values(SOUNDS);
type SoundType = typeof soundTypes[number] | null;
type reducerType = {
  soundType: SoundType;
};
const initialState: reducerType = {
  soundType: null,
};
export default function result(
  state = initialState,
  action: { type: string; payload: SoundType }
) {
  const { type, payload } = action;
  switch (type) {
    case soundActionTypes.SOUND_TYPE:
      return { ...state, soundType: payload };
    default:
      return state;
  }
}
