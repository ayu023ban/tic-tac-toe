import { alertActionTypes } from "./actions";
import { AnyAction } from "redux";
import { RESULT_TYPE } from "../../constants";

const initialState = {
  result: RESULT_TYPE.WIN,
};
export default function result(state = initialState, action: AnyAction) {
  const { type } = action;
  switch (type) {
    case alertActionTypes.WIN:
      return { ...state, result: RESULT_TYPE.WIN };
    case alertActionTypes.LOSE:
      return { ...state, result: RESULT_TYPE.LOSE };
    case alertActionTypes.TIE:
      return { ...state, result: RESULT_TYPE.TIE };
    default:
      return state;
  }
}
