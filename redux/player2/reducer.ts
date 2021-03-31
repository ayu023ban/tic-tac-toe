import { AnyAction } from "redux";
import { player2Actions } from "./actions";

type stateProps = {
  profile: object;
  isComputer: Boolean;
  ComputerDifficulty: "Low" | "Medium" | "High";
};

const initialState = {
  profile: { name: "player2" },
  isComputer: false,
  ComputerDifficultyLevel: "High",
};

export type player2ActionType = {
  type: string;
  profile: typeof initialState.profile;
};

export default function result(
  state = initialState,
  action: player2ActionType
) {
  const { type, profile } = action;
  switch (type) {
    case player2Actions.SET_PLAYER2_PROFILE:
      return { ...state, profile: profile };
    default:
      return state;
  }
}
