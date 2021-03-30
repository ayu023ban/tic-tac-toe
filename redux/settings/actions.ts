import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";

export const settingsActionTypes = {
  SET_MUTE: "SET_MUTE",
  SET_VOLUME_LEVEL: "SET_VOLUME_LEVEL",
  ENABLE_ANIMATION: "ENABLE_ANIMATION",
};

export const mute = (): ThunkAction<void, RootState, unknown, AnyAction> => (
  dispatch
) => {
  return dispatch({ type: settingsActionTypes.SET_MUTE, payload: true });
};

export const unmute = (): ThunkAction<void, RootState, unknown, AnyAction> => (
  dispatch
) => {
  return dispatch({ type: settingsActionTypes.SET_MUTE, payload: false });
};

export const setVolume = (
  volume: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch) => {
    return dispatch({
      type: settingsActionTypes.SET_VOLUME_LEVEL,
      payload: volume,
    });
  };
};

export const enableAnimation = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => (dispatch) => {
  return dispatch({
    type: settingsActionTypes.ENABLE_ANIMATION,
    payload: true,
  });
};

export const disableAnimation = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => (dispatch) => {
  return dispatch({
    type: settingsActionTypes.ENABLE_ANIMATION,
    payload: false,
  });
};
