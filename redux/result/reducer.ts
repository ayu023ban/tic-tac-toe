import { alertActions } from "./actions";
import { AnyAction } from "redux";
import { RESULT_TYPE } from "../../constants";

const initialState = {
  result: RESULT_TYPE.WIN,
};
export type resultActionType = {
  type: string;
};
export default function result(state = initialState, action: resultActionType) {
  const { type } = action;
  switch (type) {
    case alertActions.WIN:
      return { ...state, result: RESULT_TYPE.WIN };
    case alertActions.LOSE:
      return { ...state, result: RESULT_TYPE.LOSE };
    case alertActions.TIE:
      return { ...state, result: RESULT_TYPE.TIE };
    default:
      return state;
  }
}
