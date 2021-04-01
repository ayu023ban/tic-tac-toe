import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SYMBOLS } from "../../constants";
import { getEmptyGameArray } from "../../utils/game";
import { gameLevelType, turnType } from "../../utils/types";

const initialState = {
  turn: "player1" as turnType,
  player1Symbol: SYMBOLS[0],
  player2Symbol: SYMBOLS[0],
  emptySymbol: "_",
  gameBoardDimension: [3, 3],
  currentState: getEmptyGameArray([3, 3], "_"),
  gameLevel: "Low" as gameLevelType,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPlayer1Symbol(state, action: PayloadAction<typeof SYMBOLS[0]>) {
      state.player1Symbol = action.payload;
    },
    setPlayer2Symbol(state, action: PayloadAction<typeof SYMBOLS[0]>) {
      state.player2Symbol = action.payload;
    },
    setGameBoardDimension(state, { payload }: PayloadAction<[number, number]>) {
      state.gameBoardDimension = payload;
    },
    setGameLevel(state, { payload }: PayloadAction<gameLevelType>) {
      state.gameLevel = payload;
    },
  },
});

export const {
  setPlayer1Symbol,
  setPlayer2Symbol,
  setGameBoardDimension,
  setGameLevel,
} = gameSlice.actions;

export default gameSlice.reducer;
