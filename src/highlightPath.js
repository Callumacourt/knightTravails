export default function highlightPath(path) {
  path.forEach(([x, y]) => {
    // Assuming your cells have the 'cell' class and data attributes
    const cell = document.querySelector(
      `.cell[data-row="${x + 1}"][data-col="${y + 1}"]` // to offset the discrepancy between array and cell mapping (array starts from 0)
    );

    // Add a class to highlight the cell
    if (cell) {
      cell.classList.add('highlighted');
    }
  });
}
