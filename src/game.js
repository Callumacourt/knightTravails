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

  console.log(chessboard);
  return chessboard; // Return the initialized chessboard
}

function getValidMoves(x, y, chessboardSize) {
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
    return (
      newX >= 0 && newY >= 0 && newX < chessboardSize && newY < chessboardSize
    );
  });

  return validMoves;
}

const bfs = (chessboard, startPos, endPos) => {
  const queue = [];

  queue.push({
    position: startPos,
    distance: 0,
    parent: null,
  });

  while (queue.length > 0) {
    const current = queue.shift();
    const currentPosition = current.position;
    const currentDistance = current.distance;

    if (currentPosition[0] === endPos[0] && currentPosition[1] === endPos[1]) {
      console.log(currentPosition);
      break;
    }

    const validMoves = getValidMoves(
      currentPosition[0],
      currentPosition[1],
      chessboard.length // Pass the chessboard size
    );

    for (const move of validMoves) {
      const [newX, newY] = move;
      if (!chessboard[newX][newY]) {
        chessboard[newX][newY] = true;
        queue.push({
          position: [newX, newY],
          distance: currentDistance + 1,
          parent: currentPosition,
        });
      }
    }
  }
};

// Usage
const chessboardSize = 8; // Adjust the size as needed
const chessboard = initializeChessboard(chessboardSize);
const startPos = [0, 0];
const endPos = [2, 1];
bfs(chessboard, startPos, endPos);
