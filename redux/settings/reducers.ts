import { AnyAction } from "redux";
import { settingsActions } from "./actions";

const initialState = {
  isMute: false,
  volumeLevel: 1,
  animation: true,
};
export type settingsActionType = {
  type: string;
  isMute?: boolean;
  volume?: number;
  animation?: boolean;
};
export default function result(
  state = initialState,
  action: settingsActionType
) {
  const { type, isMute, volume, animation } = action;
  switch (type) {
    case settingsActions.SET_MUTE:
      return { ...state, isMute: isMute };
    case settingsActions.SET_VOLUME_LEVEL:
      return { ...state, volumeLevel: volume };
    case settingsActions.ENABLE_ANIMATION:
      return { ...state, animation: animation };
    default:
      return state;
  }
}
