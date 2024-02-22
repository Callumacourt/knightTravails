function resetHighlight() {
  const allCells = document.querySelectorAll('.cell');
  allCells.forEach(cell => {
    cell.classList.remove('highlighted');
  });
}

export default function highlightPath(path) {
  resetHighlight();

  path.forEach(([x, y]) => {
    // Assuming your cells have the 'cell' class and data attributes
    const cell = document.querySelector(
      `.cell[data-row="${x + 1}"][data-col="${y + 1}"]`
    );

    // Add a class to highlight the cell
    if (cell) {
      cell.classList.add('highlighted');
    }
  });
}
