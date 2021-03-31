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
