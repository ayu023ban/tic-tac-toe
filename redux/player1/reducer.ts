import { AnyAction } from "redux";
import { player1Actions } from "./actions";
const initialState = {
  profile: { name: "player1" },
};

export type player1ActionType = {
  type: string;
  profile: typeof initialState.profile;
};

export default function result(
  state = initialState,
  action: player1ActionType
) {
  const { type, profile } = action;
  switch (type) {
    case player1Actions.SET_PLAYER1_PROFILE:
      return { ...state, profile: profile };
    default:
      return state;
  }
}
