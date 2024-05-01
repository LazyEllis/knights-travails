import { isIdentical } from "./moves.js";
import createGraph from "./graph.js";

const graph = createGraph();

const simulateKnightMoves = (origin, destination) => {
  if (isIdentical(origin, destination)) return [origin];

  const queue = [origin];
  const parentMap = {};
  let found = false;

  while (queue.length > 0 && !found) {
    const current = queue.shift();
    const moves = graph[`${current[0]},${current[1]}`];

    moves.forEach((move) => {
      if (!parentMap[`${move[0]},${move[1]}`]) {
        parentMap[`${move[0]},${move[1]}`] = current;
        queue.push(move);

        if (isIdentical(move, destination)) {
          found = true;
          return;
        }
      }
    });
  }

  const path = [destination];
  let current = destination;

  while (!isIdentical(current, origin)) {
    const parent = parentMap[`${current[0]},${current[1]}`];
    path.unshift(parent);
    current = parent;
  }

  return path;
};

const knightMoves = (origin, destination) => {
  const path = simulateKnightMoves(origin, destination);

  console.log(
    `You made it in ${path.length - 1} ${
      path.length === 2 ? `move` : `moves`
    }! Here's your path:`
  );

  path.forEach((square) => console.log(square));
};

export default knightMoves;
