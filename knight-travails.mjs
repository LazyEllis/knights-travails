const createChessboard = () => {
  const chessboard = [];

  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
      chessboard.push([rank, file]);
    }
  }

  return chessboard;
};

const chessboard = createChessboard();

const isIdentical = (origin, destination) =>
  origin.length === destination.length &&
  origin.every((element, index) => element === destination[index]);

const inArray = (array, vertex) => {
  let newArray = [];
  array.forEach((element) => {
    if (isIdentical(vertex, element)) newArray.push(element);
  });
  return newArray.length > 0;
};

const possibleKnightMoves = (square) => {
  if (!inArray(chessboard, square)) return;

  const moves = [];

  if (inArray(chessboard, [square[0] - 2, square[1] - 1]))
    moves.push([square[0] - 2, square[1] - 1]);

  if (inArray(chessboard, [square[0] - 2, square[1] + 1]))
    moves.push([square[0] - 2, square[1] + 1]);

  if (inArray(chessboard, [square[0] - 1, square[1] - 2]))
    moves.push([square[0] - 1, square[1] - 2]);

  if (inArray(chessboard, [square[0] - 1, square[1] + 2]))
    moves.push([square[0] - 1, square[1] + 2]);

  if (inArray(chessboard, [square[0] + 1, square[1] - 2]))
    moves.push([square[0] + 1, square[1] - 2]);

  if (inArray(chessboard, [square[0] + 1, square[1] + 2]))
    moves.push([square[0] + 1, square[1] + 2]);

  if (inArray(chessboard, [square[0] + 2, square[1] - 1]))
    moves.push([square[0] + 2, square[1] - 1]);

  if (inArray(chessboard, [square[0] + 2, square[1] + 1]))
    moves.push([square[0] + 2, square[1] + 1]);

  return moves;
};

const createGraph = () => {
  const graph = {};

  chessboard.forEach((square) => {
    graph[`${square[0]},${square[1]}`] = possibleKnightMoves(square);
  });

  return graph;
};

const graph = createGraph();

const accessGraph = (square) => {
  return graph[`${square[0]},${square[1]}`];
};

const simulateKnightMoves = (origin, destination) => {
  if (isIdentical(origin, destination)) return [origin];

  const array = [];
  const queue = [origin];
  const travail = [destination];

  while (!inArray(queue, destination)) {
    const square = queue.shift();
    array.push(square);
    accessGraph(square).forEach((square) => {
      !inArray(queue, square) && !inArray(array, square) && queue.push(square);
    });
  }

  array.push(destination);
  let square = destination;

  while (!isIdentical(square, origin)) {
    const parent = array.filter((element) =>
      inArray(accessGraph(element), square)
    );
    travail.unshift(parent[0]);
    square = travail[0];
  }

  return travail;
};

const knightMoves = (origin, destination) => {
  const travail = simulateKnightMoves(origin, destination);

  console.log(
    `You made it in ${travail.length - 1} ${
      travail.length === 2 ? `move` : `moves`
    }! Here's your path:`
  );
  travail.forEach((square) => {
    console.log(square);
  });
};

export default knightMoves;
