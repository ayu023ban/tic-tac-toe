import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { SOUNDS } from "../../constants";
import { soundsActionType } from "./reducers";

export const soundActions = {
  SOUND_TYPE: "SOUND_TYPE",
};

const soundTypes = Object.values(SOUNDS);
type soundType = typeof soundTypes[number] | null;

export const playSound = (
  soundType: soundType
): ThunkAction<void, RootState, unknown, soundsActionType> => (dispatch) => {
  return dispatch({
    type: soundActions.SOUND_TYPE,
    soundType: soundType,
  });
};

export const resetSound = (): ThunkAction<
  void,
  RootState,
  unknown,
  soundsActionType
> => (dispatch) => {
  return dispatch({ type: soundActions.SOUND_TYPE, soundType: null });
};
