import createChessboard from "./chessboard.js";
import { possibleKnightMoves } from "./moves.js";

const chessboard = createChessboard();

/**
 * Creates a graph representing the possible moves of a knight on a chessboard.
 * @returns {Object} The graph representation of the chessboard.
 */
const createGraph = () => {
  const graph = {};

  // Generate all possible moves for each square on the chessboard
  chessboard.forEach((square) => {
    graph[`${square[0]},${square[1]}`] = possibleKnightMoves(square);
  });

  return graph;
};

export default createGraph;
