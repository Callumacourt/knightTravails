function resetHighlight() {
  const allCells = document.querySelectorAll('.cell');
  allCells.forEach(cell => {
    cell.classList.remove('highlighted');
  });
}

export default function highlightPath(path) {
  resetHighlight();

  // Use a loop with setTimeout to introduce delays
  path.forEach(([x, y], index) => {
    // Assuming your cells have the 'cell' class and data attributes
    const cell = document.querySelector(
      `.cell[data-row="${x + 1}"][data-col="${y + 1}"]`
    );

    // Use setTimeout to apply the 'highlighted' class with a delay
    setTimeout(() => {
      if (cell) {
        cell.classList.add('highlighted');
      }
    }, index * 500); // Adjust the delay duration (in milliseconds) as needed
  });
}
