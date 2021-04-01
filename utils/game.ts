import { getColumn, getDiagonals } from ".";
import { store } from "../redux/store";
import { resultType, turnType } from "./types";

export const getEmptyGameArray = (
  gameDimension: [number, number],
  emptySymbol: String
) => {
  const insideArray = Array.from({ length: gameDimension[1] }).map(
    (x) => emptySymbol
  );
  const outsideArray = Array.from({ length: gameDimension[0] }).map(
    (x) => insideArray
  );
  return outsideArray;
};

export const getResult = (gameArray: string[][]): resultType => {
  const player1Symbol = store.getState().game.player1Symbol.symbol;
  const player2Symbol = store.getState().game.player2Symbol.symbol;
  const emptySymbol = store.getState().game.emptySymbol;

  //   check across rows
  let result: resultType = "NOT_DECLARED";
  for (const row of gameArray) {
    if (row.some((el) => el === emptySymbol)) continue;
    if (row.every((el) => el === player1Symbol)) {
      result = "PLAYER_1_WIN";
      break;
    }
    if (row.every((el) => el === player2Symbol)) {
      result = "PLAYER_2_WIN";
      break;
    }
  }
  if (result !== "NOT_DECLARED") return result;

  // check across columns
  for (const index in gameArray) {
    const column = getColumn(gameArray, Number(index));
    if (column.some((el) => el === emptySymbol)) continue;
    if (column.every((el) => el === player1Symbol)) {
      result = "PLAYER_1_WIN";
      break;
    }
    if (column.every((el) => el === player2Symbol)) {
      result = "PLAYER_2_WIN";
      break;
    }
  }
  if (result !== "NOT_DECLARED") return result;

  // check across diagonals
  if (gameArray.length === gameArray[0].length) {
    const diagonals = getDiagonals(gameArray);
    if (
      diagonals.diagonal1.every((el) => el === player1Symbol) ||
      diagonals.diagonal2.every((el) => el === player1Symbol)
    ) {
      result = "PLAYER_1_WIN";
    } else if (
      diagonals.diagonal1.every((el) => el === player2Symbol) ||
      diagonals.diagonal2.every((el) => el === player2Symbol)
    ) {
      result = "PLAYER_2_WIN";
    }
  }

  // check tie
  if (
    gameArray.every((row) =>
      row.every((el) => el === player1Symbol || el === player2Symbol)
    )
  ) {
    result = "TIE";
  }

  return result;
};

export const gameCompleteChecker = (gameArray: string[][]) => {
  const result = getResult(gameArray);
  return (
    result == "PLAYER_1_WIN" || result == "PLAYER_2_WIN" || result == "TIE"
  );
};

const evaluate = (gameArray: string[][]) => {
  const result = getResult(gameArray);
  if (result == "PLAYER_1_WIN") return 10;
  else if (result == "PLAYER_2_WIN") return -10;
  else if (result == "TIE") return 0;
  else return -1;
};

const minimax = (
  gameArray: string[][],
  player1Symbol: string,
  player2Symbol: string,
  emptySymbol: string,
  turn: turnType
): number => {
  let score = evaluate(gameArray);
  if (score !== -1) return score;

  let best = turn === "player1" ? -1000 : 1000;
  for (const row in gameArray) {
    for (const column in gameArray) {
      if (gameArray[row][column] == emptySymbol) {
        gameArray[row][column] =
          turn === "player1" ? player1Symbol : player2Symbol;
        let newTurn: turnType = turn === "player1" ? "player2" : "player1";
        let minimax_value = minimax(
          gameArray,
          player1Symbol,
          player2Symbol,
          emptySymbol,
          newTurn
        );
        best =
          turn === "player1"
            ? Math.max(best, minimax_value)
            : Math.min(best, minimax_value);
        gameArray[row][column] = emptySymbol;
      }
    }
  }
  return best;
};

export const bestMove = (
  gameArray: string[][],
  player1Symbol: string,
  player2Symbol: string,
  emptySymbol: string,
  turn: turnType
) => {
  const matrix = Array.from(gameArray);

  let bestmove = [-1, -1];
  let bestvalue = turn === "player1" ? -1000 : 1000;
  for (const row in matrix) {
    for (const col in matrix[row]) {
      if (matrix[row][col] === emptySymbol) {
        matrix[row][col] = turn === "player1" ? player1Symbol : player2Symbol;
        let movevalue = minimax(
          gameArray,
          player1Symbol,
          player2Symbol,
          emptySymbol,
          turn
        );
        matrix[row][col] = emptySymbol;
        if (turn === "player1" && bestvalue < movevalue) {
          bestmove = [Number(row), Number(col)];
          bestvalue = movevalue;
        } else if (turn === "player2" && bestvalue > movevalue) {
          bestmove = [Number(row), Number(col)];
          bestvalue = movevalue;
        }
      }
    }
  }

  return bestMove;
};

