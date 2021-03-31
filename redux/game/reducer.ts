import { AnyAction } from "redux";
import { SYMBOLS } from "../../constants";
import { getEmptyGameArray } from "../../utils/game";
import { gameActions } from "./actions";

const initialState = {
  turn: "Player1",
  player1Symbol: SYMBOLS[0],
  player2Symbol: SYMBOLS[0],
  emptySymbol: "_",
  gameBoardDimension: [3, 3],
  currentState: getEmptyGameArray([3, 3], "_"),
};

export type gameActionType = {
  type: string;
  symbol?: typeof SYMBOLS[0];
  dimensions?: [number, number];
};
export default function result(state = initialState, action: gameActionType) {
  const { type, symbol, dimensions } = action;
  switch (type) {
    case gameActions.SET_PLAYER_1_SYMBOL:
      return { ...state, player1Symbol: symbol };
    case gameActions.SET_PLAYER_1_SYMBOL:
      return { ...state, player2Symbol: symbol };
    case gameActions.SET_GAME_BOARD_DIMENSION:
      return { ...state, gameBoardDimension: dimensions };
    default:
      return state;
  }
}
