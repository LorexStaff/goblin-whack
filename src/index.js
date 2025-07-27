import goblinImg from './goblin.png';
import './styles.css';

const board = document.getElementById('game-board');

for (let i = 0; i < 16; i += 1) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.dataset.index = i;
  board.appendChild(cell);
}

const cells = document.querySelectorAll('.cell');
let currentGoblinCell = null;

const createGoblin = () => {
  const img = document.createElement('img');
  img.src = goblinImg;
  img.alt = 'Гоблин';
  img.className = 'goblin';
  return img;
};

const placeGoblinRandomly = () => {
  const availableCells = Array.from(cells).filter(
    (cell) => cell !== currentGoblinCell,
  );
  const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];

  let goblin = document.querySelector('.goblin');
  if (!goblin) {
    goblin = createGoblin();
  }

  randomCell.appendChild(goblin);
  currentGoblinCell = randomCell;
};

placeGoblinRandomly();
setInterval(placeGoblinRandomly, 1000);
