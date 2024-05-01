/**
 * Creates a standard 8x8 chessboard represented as an array of coordinates.
 * @returns {Array} The chessboard represented as an array of coordinates.
 */
const createChessboard = () => {
  const chessboard = [];

  // Generate coordinates for each square on the chessboard
  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
      chessboard.push([rank, file]);
    }
  }

  return chessboard;
};

export default createChessboard;
