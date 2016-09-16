export default class Hand {
  constructor(config) {
    if (typeof config !== 'object' ||
        typeof config.cards === 'undefined' || !Array.isArray(config.cards)) {
      return false;
    }

    this.hand = config.cards;
    this.limit = config.limit;
    console.log("modelHand", this.hand);
    console.log("modelHandLimit", this.limit);
    return true;
  }

  addCard(card) {
    console.log("length", (this.hand.length));
    if (this.hand.length >= this.limit) {
      return false;
    }
    this.hand.splice((this.hand.length), 0, card);
    return true;
  }

  removeCard(position = 0) {

    let retour = this.hand.splice(position, 1);
    return retour.length > 0;
  }

  getAllCards() {
    return this.hand;
  }

  getCardsCount() {
    return this.hand.length;
  }
}