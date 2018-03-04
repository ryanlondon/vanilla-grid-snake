class Game {
  constructor(boardSize) {
    this.board = new Board(boardSize);
    this.snake = new Snake();
    this.timer = new Timer();
    this.events = {};

    // Bind the keypress function to the 'game' context
    this.keypress = this.keypress.bind(this);

    // Move the snake with each tick of the timer
    this.timer.onTick(this.snake.move);
    this.timer.onTick(this);
  }

  keypress(keyCode) {
    switch (keyCode) {
      case 32: this.timer.toggle(); break;  // Starts or pauses the game with the spacebar
      case 37: this.snake.turn('west'); break;  
      case 38: this.snake.turn('north'); break;
      case 39: this.snake.turn('east'); break;
      case 40: this.snake.turn('south'); break;
      default: return;
    }
  }

  onMove(func) {
    if (!this.events.move) this.events.move = [];
    this.events.move.push(func);
  }
}