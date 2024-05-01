# Knight's Travail

This repository contains a JavaScript implementation of a solver for the Knight's Travail problem. The Knight's Travail problem is a mathematical problem involving a knight on a chessboard, which visits every square exactly once. This implementation uses breadth-first search (BFS) algorithm to find the shortest path for the knight from a given starting position to a destination position.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- Generates a standard 8x8 chessboard representation.
- Determines all possible moves of a knight from a given square.
- Constructs a graph representing the possible moves of a knight on a chessboard.
- Finds the shortest path for the knight from a given origin to a destination using BFS algorithm.
- Provides an example file demonstrating how to use the solver.

## Usage

To use the solver, import the `knightMoves` function from the `knight.js` module and provide the origin and destination coordinates:

```javascript
import knightMoves from "./knight.js";

const origin = [0, 0];
const destination = [7, 7];

knightMoves(origin, destination);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

This implementation was inspired by the Knight's Travail problem together with [The Odin Project](https://www.theodinproject.com/) and utilizes concepts of graph theory and BFS algorithm.
