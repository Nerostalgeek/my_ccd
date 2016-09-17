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

  attack(target) {
    if (target instanceof Pawn) {
      return target.receiveAttack(this);
    }

    return false;
  }

  receiveAttack(opponent, strikeBack = false) {
    if (strikeBack === true) {
      opponent.life -= this.getDef();
    }

    this.life -= opponent.getStrength();

    return true;
  }
}