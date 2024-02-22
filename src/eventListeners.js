export default function addListeners() {
  const cells = document.querySelectorAll('.cell');

  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      console.log('clicked');
    });
  });
}
