export default class Hand {
  constructor(config) {
    if (typeof config !== 'object' ||
        typeof config.cards === 'undefined' || !Array.isArray(config.cards)) {
      return false;
    }

    this.pack = config.cards;
    console.log("model", this.pack);
    return true;
  }

  addCard() {

  }

  removeCard(position) {

  }

  getAllCards() {
  return this.pack;
  }

  getCardsCount() {
    return this.pack.length;
  }
}