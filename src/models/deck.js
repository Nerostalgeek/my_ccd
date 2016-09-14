export default class Deck {
  constructor(config) {
    if (typeof config !== 'object' ||
        typeof config.cards === 'undefined' || !Array.isArray(config.cards)) {
      return false;
    }

    this.pack = config.cards;
    console.log(this.pack);
    return true;


  }


  shuffle() {
    let i = 0, j = 0, temp = null;
    for (i = this.pack.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this.pack[i];
      this.pack[i] = this.pack[j];
      this.pack[j] = temp;
    }
    return this.pack;
  }

  draw() {
    if (this.pack.length >= 1) {
      return this.pack[0];
    }
  }

  getCardsCount() {
    return this.pack.length;
  }
}