import createChessboard from "./chessboard.js";
import { possibleKnightMoves } from "./moves.js";

const chessboard = createChessboard();

const createGraph = () => {
  const graph = {};

  chessboard.forEach((square) => {
    graph[`${square[0]},${square[1]}`] = possibleKnightMoves(square);
  });

  return graph;
};

export default createGraph;
