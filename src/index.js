import initializeChessboard from './game';
import dom from './dom';
import './style.css';
document.addEventListener('DOMContentLoaded', function () {
  const chessboardContainer = document.querySelector('.chessboardContainer');
  dom(chessboardContainer);
});

const chessboard = initializeChessboard(8);
