export default function dom(chessboardContainer) {
  const chessboard = document.createElement('div');
  chessboard.classList.add('chessboard');

  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j < 8; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = i + 1;
      cell.dataset.col = j + 1;

      if ((i + j) % 2 === 0) {
        cell.classList.add('light');
      } else {
        cell.classList.add('dark');
      }

      chessboard.appendChild(cell);
    }
  }

  chessboardContainer.appendChild(chessboard);
}
