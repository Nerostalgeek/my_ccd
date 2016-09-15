let deckModel = require('../src/models/deck.js');
let instance = new deckModel.default;

let defaultPack = { "cards": [{ "face": "card-1" }, { "face": "card-2" }] };
let undefinedPack = undefined;
let notAnArray = '{}';

describe("constructor", function() {
  it("should return an object of array with cards", function() {
    expect(instance.constructor(defaultPack)).toBe(true);
    expect(instance.constructor(undefinedPack)).toBe(false);
    expect(instance.constructor(notAnArray)).toBe(false);
  });
});

describe("shuffle", function() {
  it("should shuffles the deck", function() {
    console.log("pack", instance.pack);
    instance.shuffle();
    if (instance.pack == instance.shuffle()) {
      for (let x = 0; x <= 10; x++) {
        instance.shuffle();
        console.log("shuffledpack", instance.shuffle());
        console.log("packAfter", instance.pack);
      }
    }
    expect(instance.pack).toEqual(instance.shuffle());
  })
});

describe("draw", function() {
  it("should draw the first cards in the deck", function() {
    console.log(instance.draw());
    expect(instance.pack[0]).toBeDefined();
    if (instance.pack[0] === undefined) {
      expect(instance.pack[0].toBeUndefined);
    }
  })
});

describe("insertAt", function() {
  it("should insert a card in the deck at a given position", function() {
    instance.insertAt({ 'face': 'card-3' }, 2);
    console.log("afterInsert", instance.pack);
    expect(instance.pack[2]).toBeDefined();
  })
});

describe("getCardsCount", function() {
  it("should give the current number of cards in the deck", function() {
    expect(instance.pack.length).toBeDefined();
  })
});
