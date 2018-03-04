class Snake {
  /**
   * Snake constructor
   * @param {Object} initialLocation The snake's starting position
   * @param {Number} initialLength How long the snake is to start
   * @param {String} initialDirection Which direction the snake starts off in
   */
  constructor(initialLocation, initialLength, initialDirection) {
    this.location = { x: 0, y: 0 } || initialLocation;
    this.length = initialLength || 2;
    this.direction = initialDirection || 'east';
    this.body = [];

    // Bind functions to the 'snake' context
    this.turn = this.turn.bind(this);
    this.move = this.move.bind(this);

    // Construct the snake's body based on its initial state
    if (this.length - 1 > this.body.length) {
      for (let i = 1; i < this.length; i++) {
        switch (this.direction) {
          case 'north': this.body.push({ x: this.location.x, y: this.location.y - i }); break;
          case 'south': this.body.push({ x: this.location.x, y: this.location.y + i }); break;
          case 'east': this.body.push({ x: this.location.x - i, y: this.location.y }); break;
          case 'west': this.body.push({ x: this.location.x + i, y: this.location.y }); break;
          default: continue;
        }
      }
    }
  }

  turn(direction) {
    const validateDirection = () => {
      if (this.direction === direction) return false;
      if (this.direction === 'north' && direction === 'south') return false;
      if (this.direction === 'south' && direction === 'north') return false;
      if (this.direction === 'east' && direction === 'west') return false;
      if (this.direction === 'west' && direction === 'east') return false;
      return true;
    }
    if (validateDirection()) this.direction = direction; 
  }

  move() {
    const previousLocation = { x: this.location.x, y: this.location.y };
    
    switch (this.direction) {
      case 'north': --this.location.y; break;
      case 'south': ++this.location.y; break;
      case 'west': --this.location.x; break;
      case 'east': ++this.location.x; break;
      default: return; 
    }

    // Update the position of the snake's body
    if (this.length > 1) {
      this.body.unshift(previousLocation);
      this.body.pop();
    }
  }
}