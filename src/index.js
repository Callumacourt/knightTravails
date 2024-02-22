import initializeChessboard from './game';
import dom from './dom';
import addListeners from './eventListeners';
import './style.css';
import { bfs } from './game';
document.addEventListener('DOMContentLoaded', function () {
  const chessboardContainer = document.querySelector('.chessboardContainer');
  dom(chessboardContainer);
  addListeners();
});

const chessboard = initializeChessboard(8);
