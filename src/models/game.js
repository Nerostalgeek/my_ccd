import eventManager from "../eventManager";


export default class Game extends eventManager {
  constructor(config) {
    super();
    this.up = config.up;
    this.down = config.down;
    this.turn = 1;
    console.log((this.turn));
  }

  proxy(side, action, payload) {
    if (side !== 'down' || side !== 'up') {
      return false;
    }

    return this[side].call(action, payload);
  }

  getTurn() {
   if (this.turn % 2 === 0) {
     return 'up';
   }

   return 'down';
  }

  changeTurn() {
    this.turn++;
  }
}