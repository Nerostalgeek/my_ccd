import Abstract from "./abstract";
export default class Pawn extends Abstract {
  constructor(life, strength, def) {
    super();
    this.life = life;
    this.strength = strength;
    this.def = def;
  }


  getLife() {
    return this.life;
  }

  getStrength() {
    return this.strength;
  }

  getDef() {
    return this.def;
  }

  attack(target, hasStrikeBack = false) {
    if (target instanceof Pawn) {
      return this.receiveAttack(target, hasStrikeBack);
    }

    return false;
  }

  receiveAttack(opponent, strikeBack = false) {
    if (strikeBack === true) {
      this.life -= opponent.getDef();
    }

    opponent.life -= this.getStrength();

    return true;
  }
}