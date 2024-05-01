import createChessboard from "./chessboard.js";

const chessboard = createChessboard();

/**
 * Checks if two coordinates are identical.
 * @param {Array} origin - The first coordinate.
 * @param {Array} destination - The second coordinate.
 * @returns {boolean} True if the coordinates are identical, false otherwise.
 */
export const isIdentical = (origin, destination) =>
  origin[0] === destination[0] && origin[1] === destination[1];

/**
 * Checks if a given coordinate exists in an array of coordinates.
 * @param {Array} array - The array of coordinates.
 * @param {Array} vertex - The coordinate to check.
 * @returns {boolean} True if the coordinate exists in the array, false otherwise.
 */
const inArray = (array, vertex) =>
  array.some((element) => isIdentical(vertex, element));

/**
 * Generates all possible moves of a knight from a given square.
 * @param {Array} square - The coordinate of the square.
 * @returns {Array} An array of possible moves for the knight.
 */
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
