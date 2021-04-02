import { getColumn, getDiagonals } from ".";
import { setGameBoard, setNextTurn } from "../redux/game/reducer";
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

export const getResult = (gameArray: String[][]): resultType => {
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

export const gameCompleteChecker = (gameArray: String[][]) => {
  const result = getResult(gameArray);
  return (
    result == "PLAYER_1_WIN" || result == "PLAYER_2_WIN" || result == "TIE"
  );
};

const evaluate = (gameArray: String[][]) => {
  const result = getResult(gameArray);
  if (result == "PLAYER_1_WIN") return 10;
  else if (result == "PLAYER_2_WIN") return -10;
  else if (result == "TIE") return 0;
  else return -1;
};

const minimax = (
  gameArray: String[][],
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
  gameArray: String[][],
  player1Symbol: string,
  player2Symbol: string,
  emptySymbol: string,
  turn: turnType
) => {
  const matrix = Array.from(gameArray);

  let bestmoveToPlay = null as number[] | null;
  let bestvalue = turn === "player1" ? -1000 : 1000;
  for (const row in matrix) {
    for (const col in matrix[row]) {
      if (matrix[row][col] === emptySymbol) {
        matrix[row][col] = turn === "player1" ? player1Symbol : player2Symbol;
        const nextTurn: turnType = turn === "player1" ? "player2" : "player1";
        let movevalue = minimax(
          gameArray,
          player1Symbol,
          player2Symbol,
          emptySymbol,
          nextTurn
        );
        matrix[row][col] = emptySymbol;
        if (turn === "player1" && bestvalue < movevalue) {
          bestmoveToPlay = [Number(row), Number(col)];
          bestvalue = movevalue;
        } else if (turn === "player2" && bestvalue > movevalue) {
          bestmoveToPlay = [Number(row), Number(col)];
          bestvalue = movevalue;
        }
      }
    }
  }

  return bestmoveToPlay;
};

export const randomMove = (gameState: String[][], emptySymbol: string) => {
  const availableMoves = gameState
    .map((row, rowIndex) =>
      row.map((el, columIndex) =>
        el === emptySymbol ? [rowIndex, columIndex] : null
      )
    )
    .flat()
    .filter(Boolean);

  const move =
    availableMoves.length > 0
      ? availableMoves[Math.floor(Math.random() * availableMoves.length)]
      : null;
  return move;
};

const playComputerMove = () => {
  const gameLevel = store.getState().player2.gameLevel;
  const currentGameState = store.getState().game.currentState;
  const newGameState = currentGameState.map((row) => row.map((el) => el));
  const player1Symbol = store.getState().game.player1Symbol.symbol;
  const player2Symbol = store.getState().game.player2Symbol.symbol;
  const emptySymbol = store.getState().game.emptySymbol;
  let move: number[] | null = null;
  switch (gameLevel) {
    case "High":
      move = bestMove(
        newGameState,
        player1Symbol,
        player2Symbol,
        emptySymbol,
        "player2"
      );
      break;
    case "Low":
      move = randomMove(newGameState, emptySymbol);
      break;
    case "Medium":
      move =
        Math.random() > 0.5
          ? bestMove(
              newGameState,
              player1Symbol,
              player2Symbol,
              emptySymbol,
              "player2"
            )
          : randomMove(newGameState, emptySymbol);
      break;
  }
  if (move !== null) {
    newGameState[move[0]][move[1]] = player2Symbol;
    store.dispatch(setGameBoard(newGameState));
    store.dispatch(setNextTurn());
  }
};

export const playMove = (row: number, column: number) => {
  const turn = store.getState().game.turn;
  const currentGameState = store.getState().game.currentState;
  const newGameState = currentGameState.map((row) => row.map((el) => el));

  if (turn === "player1") {
    const player1Symbol = store.getState().game.player1Symbol;
    newGameState[row][column] = player1Symbol.symbol;
    store.dispatch(setGameBoard(newGameState));
    store.dispatch(setNextTurn());
    const player2Mode = store.getState().player2.mode;
    if (player2Mode === "computer") {
      playComputerMove();
    }
  } else {
    const player2Symbol = store.getState().game.player2Symbol;
    newGameState[row][column] = player2Symbol.symbol;
    store.dispatch(setGameBoard(newGameState));
    store.dispatch(setNextTurn());
  }
};
