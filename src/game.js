export default function initializeChessboard(n) {
  const chessboard = [];

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      // Each cell is initially marked as unvisited (false)
      row.push(false);
    }
    chessboard.push(row);
  }

  return chessboard; // Return the initialized chessboard
}

function getValidMoves(x, y) {
  const possibleMoves = [
    [x - 2, y + 1],
    [x - 1, y + 2],
    [x + 1, y + 2],
    [x + 2, y + 1],
    [x - 2, y - 1],
    [x - 1, y - 2],
    [x + 1, y - 2],
    [x + 2, y - 1],
  ];

  const validMoves = possibleMoves.filter(move => {
    const [newX, newY] = move;
    // Within the chessboard boundaries?
    return newX >= 0 && newY >= 0 && newX < 8 && newY < 8;
  });

  return validMoves;
}

export const bfs = (Ogchessboard, startPos, endPos) => {
  const queue = [];
  const chessboard = Ogchessboard.map(row => row.slice());

  queue.push({
    position: startPos,
    distance: 0,
    parent: null,
    path: [startPos],
  });

  while (queue.length > 0) {
    const current = queue.shift();
    const currentPosition = current.position;
    const currentDistance = current.distance;

    if (currentPosition[0] === endPos[0] && currentPosition[1] === endPos[1]) {
      console.log(current.path);
      return current.path; // Return the path when destination is reached
    }

    const validMoves = getValidMoves(
      currentPosition[0],
      currentPosition[1],
      chessboard.length // Pass the chessboard size
    );
    for (const move of validMoves) {
      const [newX, newY] = move;
      if (
        newX >= 0 &&
        newY >= 0 &&
        newX <= chessboard.length &&
        newY <= chessboard.length &&
        !chessboard[newX][newY]
      ) {
        chessboard[newX][newY] = true;
        queue.push({
          position: [newX, newY],
          distance: currentDistance + 1,
          parent: currentPosition,
          path: [...current.path, [newX, newY]],
        });
      }
    }
  }

  // If the loop completes without finding a path, return an indication
  console.log('No path found');
  return null;
};

// Usage
//const chessboardSize = 8; // Adjust the size as needed
//const chessboard = initializeChessboard(chessboardSize);
//const startPos = [1, 1];
//const endPos = [5, 1];
//bfs(chessboard, startPos, endPos);
