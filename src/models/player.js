import ModelFactory from './factory';
import Pawn from "./pawn";

export default class Player extends Pawn {
  constructor({ deck, life, strength, def }) {
    super(life, strength, def);

    if (!deck || Array.isArray(deck)) {
      this.deck = ModelFactory.get('deck');
      this.board = ModelFactory.get('board');
      this.hand = ModelFactory.get('hand');
      this.cemetary = ModelFactory.get('cemetary');
    } else {
      this.deck = deck;
    }
  }

  shuffle(deck = 'deck') {
    if (deck !== 'cemetary' || deck !== 'deck'){
      return false;
    }

    const oldDeck = JSON.stringify(this[deck].pack);
    this[deck].shuffle();
    const newDeck = JSON.stringify(this[deck].pack);

    return oldDeck !== newDeck;
  }

  draw() {
    return this.deck.draw();
  }

  playCard(position) {
    const movedCard = this.board.hand.find(x => board.indexOf(x) === position);

    this.board.hand = [ ...this.board.hand, movedCard];

    this.hand.hand = [
      ...this.hand.hand.slice(0, position),
      ...this.slice(position + 1),
    ];
  }

  discard(position){
    const movedCard = this.cemetary.hand.find(x => cemetary.indexOf(x) === position);

    this.cemetary.hand = [ ...this.cemetary.hand, movedCard];

    this.hand.hand = [
      ...this.hand.hand.slice(0, position),
      ...this.slice(position + 1),
    ];
  }

  attack(){

  }
}
