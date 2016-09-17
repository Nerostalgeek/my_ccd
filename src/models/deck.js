export default class Deck {
  constructor(config) {
    if (typeof config !== 'object' ||
        typeof config.cards === 'undefined' || !Array.isArray(config.cards)) {
      return false;
    }

    this.pack = config.cards;
    console.log("model", this.pack);
    return true;
  }


  shuffle() {
    const temp = [];
    let len = this.pack.length;

    while (len) {
      temp.push(this.pack.splice(Math.floor(Math.random()* this.pack.length), 1)[0]);
      len--;
    }

    this.pack = temp;
  }

  draw() {
    if (this.pack.length >= 1) {
      return this.pack[0];
    }

    return undefined;
  }

  getCardsCount() {
    return this.pack.length;
  }

  insertAt(card, position) {
    return this.pack.splice(position, 0, card)
  }
}