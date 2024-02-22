export default function addListeners() {
  const cells = document.querySelectorAll('.cell');
  let startCell = null;
  let endCell = null;

  cells.forEach(cell => {
    cell.addEventListener('click', event => {
      if (!startCell) {
        startCell = event.currentTarget;
        console.log(
          'Starting position:',
          startCell.dataset.row,
          startCell.dataset.col
        );
      } else if (!endCell) {
        endCell = event.currentTarget;
        console.log(
          'Ending position:',
          endCell.dataset.row,
          endCell.dataset.col
        );

        startCell = null;
        endCell = null;
      }
    });
  });
}
