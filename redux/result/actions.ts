import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { RESULT_TYPE } from "../../constants";
import { resultActionType } from "./reducer";
export const alertActions = Object.assign({}, RESULT_TYPE);

export const win = (): ThunkAction<
  void,
  RootState,
  unknown,
  resultActionType
> => (dispatch) => {
  return dispatch({ type: alertActions.WIN });
};

export const lose = (): ThunkAction<void, RootState, unknown, AnyAction> => (
  dispatch
) => {
  return dispatch({ type: alertActions.LOSE });
};
export const tie = (): ThunkAction<void, RootState, unknown, AnyAction> => (
  dispatch
) => {
  return dispatch({ type: alertActions.TIE });
};
