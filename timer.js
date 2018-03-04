class Timer {
  constructor(initialSpeed) {
    this.speed = initialSpeed || 1;
    this.running = null;
    this.events = {};

    this.tick = this.tick.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onTick(func) {
    if (!this.events.tick) this.events.tick = [];
    this.events.tick.push(func);
  }

  tick() {
    if (this.events.tick) {
      this.events.tick.forEach(func => func());
    } 
    else return;
  }

  start() {
    if (!this.running) {
      this.running = setInterval(this.tick, (500 / this.speed));
    }
  }

  pause() {
    if (this.running) {
      clearInterval(this.running);
      this.running = null;
    }
  }

  toggle() {
    if (this.running) this.pause();
    else this.start();
  }
}
