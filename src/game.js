function initializeChessboard(n) {
  const chessboard = [];

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      // Each cell is initially marked as unvisited (false)
      row.push(false);
    }
    chessboard.push(row);
  }

  return chessboard;
}

function getValidMoves(x, y, chessboard) {
  const currentPosition = [x, y];
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
    //Within the chessboard boundaries?
    if (
      newX >= 0 &&
      newY >= 0 &&
      newX < chessboardSize &&
      newY < chessboardSize
    ) {
      return true;
    }
  });
  return validMoves;
}

function knightTravails(x, y) {}
