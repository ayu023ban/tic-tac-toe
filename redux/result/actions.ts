import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { RESULT_TYPE } from "../../constants";
export const alertActionTypes = Object.assign({}, RESULT_TYPE);

export const win = (): ThunkAction<void, RootState, unknown, AnyAction> => (
  dispatch
) => {
  return dispatch({ type: alertActionTypes.WIN });
};

export const lose = (): ThunkAction<void, RootState, unknown, AnyAction> => (
  dispatch
) => {
  return dispatch({ type: alertActionTypes.LOSE });
};
export const tie = (): ThunkAction<void, RootState, unknown, AnyAction> => (
  dispatch
) => {
  return dispatch({ type: alertActionTypes.TIE });
};
