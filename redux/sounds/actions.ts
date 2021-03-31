import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { SOUNDS } from "../../constants";

export const soundActionTypes = {
  SOUND_TYPE: "SOUND_TYPE",
};

const soundTypes = Object.values(SOUNDS);
type soundType = typeof soundTypes[number] | null;

export const playSound = (
  soundType: soundType
): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) => {
  return dispatch({
    type: soundActionTypes.SOUND_TYPE,
    payload: soundType,
  });
};

export const resetSound = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => (dispatch) => {
  return dispatch({ type: soundActionTypes.SOUND_TYPE, payload: null });
};
