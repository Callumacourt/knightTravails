import initializeChessboard from './game';
import dom from './dom';
import addListeners from './eventListeners';
import './style.css';

document.addEventListener('DOMContentLoaded', function () {
  const chessboardContainer = document.querySelector('.chessboardContainer');
  dom(chessboardContainer);

  addListeners(chessboard);
});

const chessboard = initializeChessboard(8);
