import { alertActionTypes } from "./actions";
import { AnyAction } from "redux";

const initialState = {};
export default function result(state = initialState, action: AnyAction) {
  const { type } = action;
  switch (type) {
    case alertActionTypes.WIN:
      return { ...state };
    case alertActionTypes.LOSE:
      return { ...state };
    case alertActionTypes.TIE:
      return { ...state };
    default:
      return state;
  }
}
