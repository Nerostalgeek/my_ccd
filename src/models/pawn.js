import EventManager from "../eventManager";

export default class Pawn extends EventManager{
  constructor() {
    if (new.target === Pawn) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
  }
}
