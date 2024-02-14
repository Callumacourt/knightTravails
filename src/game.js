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

function searchAlgo(startX, startY, chessboardSize) {
  const start = [startX, startY];
  const queue = [];
  queue.push(start);

  while (queue.length > 0) {
    let currentMove = queue.pop();
    let possibleMoves = getValidMoves(
      currentMove[0],
      currentMove[1],
      chessboardSize
    );

    possibleMoves.forEach(move => {
      queue.push(move);
      if (move !== end) {
        searchAlgo(new coords());
        // find a way to weight towards the end move so it gets there quicker
      }
    });
  }
}

function knightTravails(x, y) {
  const currentPosition = (3, 3);
}
