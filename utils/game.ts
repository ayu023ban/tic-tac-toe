import { RESULT_TYPE } from "../constants";
import { store } from "../redux/store";
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

const resultTypes = Object.values(RESULT_TYPE);
type resultType = typeof resultTypes[number];

export const getResult = (gameArray: string[][]): resultType => {
  const player1Symbol = store.getState().game.player1Symbol
  return "PLAYER_1_WIN";
};
