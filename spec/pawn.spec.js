let Pawn = require('../src/models/pawn.js').default;

describe('constructor', () => {
  let instance = new Pawn(1, 2, 3);

  it('should return a new instance of pawn with life, strength and def', () => {
    console.log(typeof instance.getStrength);
    expect(instance.life).toEqual(1);
    expect(instance.strength).toEqual(2);
    expect(instance.def).toEqual(3);
    expect(instance.getLife).toBeDefined();
    expect(instance.getStrength).toBeDefined();
    expect(instance.getDef).toBeDefined();
    expect(instance.attack).toBeDefined();
    expect(instance.receiveAttack).toBeDefined();
  });

});

describe('getLife', () => {
  let instance = new Pawn(1, 2, 3);
  it('should return the life of the instance', () => {
    expect(instance.getLife()).toEqual(1);
  })
});

describe('getStrength', () => {
  let instance = new Pawn(1, 2, 3);
  it('should return the strength of the instance', () => {
    expect(instance.getStrength()).toEqual(2);
  })
});

describe('getDef', () => {
  let instance = new Pawn(1, 2, 3);
  it('should return the def of the instance', () => {
    expect(instance.getDef()).toEqual(3);
  })
});


describe('attack', () => {
  let instance = new Pawn(100, 50, 10);
  let opponent = new Pawn(100, 50, 20);
  let fake = {};

  it('should attack an other instance of Pawn ', () => {
    expect(instance.attack(opponent)).toEqual(true);
    expect(instance.attack(fake)).toEqual(false);

    expect(opponent.life).toEqual(50);
    expect(instance.life).toEqual(100);

    expect(instance.attack(opponent, true)).toEqual(true);

    expect(opponent.life).toEqual(0);
    expect(instance.life).toEqual(80);
  })
});