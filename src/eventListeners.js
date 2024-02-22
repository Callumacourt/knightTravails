// Import the bfs function
import { bfs } from './game';

export default function addListeners(chessboard) {
  const cells = document.querySelectorAll('.cell');
  let startCell = null;
  let endCell = null;

  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      if (!startCell) {
        startCell = cell;
        console.log(
          'Starting position:',
          startCell.dataset.row,
          startCell.dataset.col
        );
      } else if (!endCell) {
        endCell = cell;
        console.log(
          'Ending position:',
          endCell.dataset.row,
          endCell.dataset.col
        );

        // Convert dataset values to integers
        const startCoords = [
          parseInt(startCell.dataset.row) - 1,
          parseInt(startCell.dataset.col) - 1,
        ];
        const endCoords = [
          parseInt(endCell.dataset.row) - 1,
          parseInt(endCell.dataset.col) - 1,
        ];

        // Call BFS function
        bfs(chessboard, startCoords, endCoords);

        // Reset start and end cells for the next selection
        startCell = null;
        endCell = null;
      }
    });
  });
}
