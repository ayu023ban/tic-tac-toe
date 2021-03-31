import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { SYMBOLS } from "../../constants";
import { gameActionType } from "./reducer";
export const gameActions = {
  SET_PLAYER_1_SYMBOL: "SET_PLAYER_1_SYMBOL",
  SET_PLAYER_2_SYMBOL: "SET_PLAYER_2_SYMBOL",
  SET_GAME_BOARD_DIMENSION: "SET_GAME_BOARD_DIMENSION",
  SET_TURN: "SET_TURN",
};

export const setPlayer1Symbol = (
  symbol: typeof SYMBOLS[0]
): ThunkAction<void, RootState, unknown, gameActionType> => (dispatch) => {
  dispatch({
    type: gameActions.SET_PLAYER_1_SYMBOL,
    symbol: symbol,
  });
};

export const setPlayer2Symbol = (
  symbol: typeof SYMBOLS[0]
): ThunkAction<void, RootState, unknown, gameActionType> => (dispatch) => {
  dispatch({ type: gameActions.SET_PLAYER_2_SYMBOL, symbol: symbol });
};

export const setGameBoardDimension = (
  dimension: [number, number]
): ThunkAction<void, RootState, unknown, gameActionType> => (dispatch) => {
  dispatch({
    type: gameActions.SET_GAME_BOARD_DIMENSION,
    dimensions: dimension,
  });
};
