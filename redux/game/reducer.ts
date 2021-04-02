import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SYMBOLS } from "../../constants";
import { getEmptyGameArray } from "../../utils/game";
import { turnType } from "../../utils/types";

const initialState = {
  turn: "player1" as turnType,
  player1Symbol: SYMBOLS[0],
  player2Symbol: SYMBOLS[1],
  emptySymbol: "_",
  gameBoardDimension: [3, 3],
  currentState: getEmptyGameArray([3, 3], "_") as String[][],
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

    setGameBoard(state, { payload }: PayloadAction<String[][]>) {
      state.currentState = payload;
    },
    setNextTurn(state) {
      state.turn = state.turn === "player1" ? "player2" : "player1";
    },
  },
});

export const {
  setPlayer1Symbol,
  setPlayer2Symbol,
  setGameBoardDimension,
  setGameBoard,
  setNextTurn,
} = gameSlice.actions;

export default gameSlice.reducer;
