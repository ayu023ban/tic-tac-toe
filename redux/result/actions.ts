import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
export const alertActionTypes = {
  WIN: "WIN",
  LOSE: "LOSE",
  TIE: "TIE",
};

export const win = (): ThunkAction<void, RootState, unknown, AnyAction> => (
  dispatch
) => {
  return dispatch({ type: alertActionTypes.WIN });
};
