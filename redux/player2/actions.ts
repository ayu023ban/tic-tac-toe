import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { player2ActionType } from "./reducer";

export const player2Actions = {
  SET_PLAYER2_PROFILE: "SET_PLAYER2_PROFILE",
};

export const setPlayer2Name = (
  name: string
): ThunkAction<void, RootState, unknown, player2ActionType> => (
  dispatch,
  getState
) => {
  const player2Profile = { ...getState().player2.profile, name: name };
  dispatch({
    type: player2Actions.SET_PLAYER2_PROFILE,
    profile: player2Profile,
  });
};
