import { AnyAction } from "redux";
import { settingsActionTypes } from "./actions";

const initialState = {
  isMute: false,
  volumeLevel: 1,
  animation: true,
};
export default function result(state = initialState, action: AnyAction) {
  const { type, payload } = action;
  switch (type) {
    case settingsActionTypes.SET_MUTE:
      return { ...state, isMute: Boolean(payload) };
    case settingsActionTypes.SET_VOLUME_LEVEL:
      return { ...state, volumeLevel: Number(payload) };
    case settingsActionTypes.ENABLE_ANIMATION:
      return { ...state, animation: payload };
    default:
      return state;
  }
}
