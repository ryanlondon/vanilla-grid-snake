class Board {
  constructor(boardSize) {
    this.boardSize = boardSize || 30;

    this.isInBounds = this.isInBounds.bind(this);
    this.randomSquare = this.randomSquare.bind(this);
  }

  isInBounds(x, y) {
    if (x < 0 || x >= boardSize) return false;
    if (y < 0 || y >= boardSize) return false;
    return true;
  }

  randomSquare() {
    const x = Math.floor(Math.random() * this.boardSize);
    const y = Math.floor(Math.random() * this.boardSize);
    return { x, y };
  }
}