import createChessboard from "./chessboard.js";

const chessboard = createChessboard();

export const isIdentical = (origin, destination) =>
  origin[0] === destination[0] && origin[1] === destination[1];

const inArray = (array, vertex) =>
  array.some((element) => isIdentical(vertex, element));

export const possibleKnightMoves = (square) => {
  const moves = [
    [square[0] - 2, square[1] - 1],
    [square[0] - 2, square[1] + 1],
    [square[0] - 1, square[1] - 2],
    [square[0] - 1, square[1] + 2],
    [square[0] + 1, square[1] - 2],
    [square[0] + 1, square[1] + 2],
    [square[0] + 2, square[1] - 1],
    [square[0] + 2, square[1] + 1],
  ];

  return moves.filter((move) => inArray(chessboard, move));
};
