function resetHighlight() {
  const allCells = document.querySelectorAll('.cell');
  allCells.forEach(cell => {
    cell.classList.remove('highlighted');
    cell.innerHTML = ''; // Clear existing content
  });
}

export default function highlightPath(path) {
  resetHighlight();

  // Use a loop with setTimeout to introduce delays
  path.forEach(([x, y], index) => {
    const cell = document.querySelector(
      `.cell[data-row="${x + 1}"][data-col="${y + 1}"]`
    );

    // Use setTimeout to apply the 'highlighted' class with a delay
    setTimeout(() => {
      if (cell) {
        cell.classList.add('highlighted');

        // Create a span element for numbering
        const span = document.createElement('span');
        span.textContent = index + 1;

        // Append the span to the cell
        cell.appendChild(span);
      }
    }, index * 450); // Adjust the delay duration (in milliseconds) as needed
  });
}
