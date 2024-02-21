const chessboardContainer = document.querySelector('.chessboardContainer');

const chessboard = document.createElement('div');
chessboard.classList.add('chessboard');

for (let i = 0; (i += 1); i <= 8) {
  const row = document.createElement('div');
  row.classList.add('row');

  for (let j = 0; (i += 1); i <= 8) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
  }

  if ((i + j) % 2 == 0) {
    cell.classList.add('light');
  } else {
    cell.classList.add('dark');
  }
  row.appendChild(cell);
  chessboard.appendChild(row);
}

chessboardContainer.appendChild(chessboard);
