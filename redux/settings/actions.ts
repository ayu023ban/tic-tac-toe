import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { settingsActionType } from "./reducers";

export const settingsActions = {
  SET_MUTE: "SET_MUTE",
  SET_VOLUME_LEVEL: "SET_VOLUME_LEVEL",
  ENABLE_ANIMATION: "ENABLE_ANIMATION",
};

export const mute = (): ThunkAction<
  void,
  RootState,
  unknown,
  settingsActionType
> => (dispatch) => {
  return dispatch({ type: settingsActions.SET_MUTE, isMute: true });
};

export const unmute = (): ThunkAction<
  void,
  RootState,
  unknown,
  settingsActionType
> => (dispatch) => {
  return dispatch({ type: settingsActions.SET_MUTE, isMute: false });
};

export const setVolume = (
  volume: number
): ThunkAction<void, RootState, unknown, settingsActionType> => {
  return (dispatch) => {
    return dispatch({
      type: settingsActions.SET_VOLUME_LEVEL,
      volume: volume,
    });
  };
};

export const enableAnimation = (): ThunkAction<
  void,
  RootState,
  unknown,
  settingsActionType
> => (dispatch) => {
  return dispatch({
    type: settingsActions.ENABLE_ANIMATION,
    animation: true,
  });
};

export const disableAnimation = (): ThunkAction<
  void,
  RootState,
  unknown,
  settingsActionType
> => (dispatch) => {
  return dispatch({
    type: settingsActions.ENABLE_ANIMATION,
    animation: false,
  });
};
