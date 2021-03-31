import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { player1ActionType } from "./reducer";

export const player1Actions = {
  SET_PLAYER1_PROFILE: "SET_PLAYER1_PROFILE",
};

export const setPlayer1Name = (
  name: string
): ThunkAction<void, RootState, unknown, player1ActionType> => (
  dispatch,
  getState
) => {
  const player1Profile = { ...getState().player2.profile, name: name };
  dispatch({
    type: player1Actions.SET_PLAYER1_PROFILE,
    profile: player1Profile,
  });
};
