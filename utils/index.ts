export const getColumn = (matrix: any[][], columnIndex: number) => {
  let column = [];
  for (let i = 0; i < matrix.length; i++) {
    column.push(matrix[i][columnIndex]);
  }
  return column;
};

export const getDiagonals = (matrix: any[][]) => {
  let diagonal1 = [];
  let diagonal2 = [];
  for (let i = 0; i < matrix.length; i++) {
    diagonal1.push(matrix[i][i]);
    diagonal2.push(matrix[i][matrix.length - i - 1]);
  }
  return { diagonal1, diagonal2 };
};
