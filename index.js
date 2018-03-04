document.addEventListener('DOMContentLoaded', () => {

  const BOARD_SIZE = 30;

  const game = new Game(BOARD_SIZE);
  
  game.onMove((snake) => {
    console.log(snake);
  })

  const grid = document.getElementById('grid');

  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.id = `${i}-${j}`;
      grid.appendChild(square);
    }
  }

  window.addEventListener('keydown', (e) => game.keypress(e.keyCode));
});