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

function knightTravails(x, y) {}
