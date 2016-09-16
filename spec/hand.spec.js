let handModel = require('../src/models/hand.js');
let instance = new handModel.default;

let defaultHand = { "cards": [{ "face": "card-1" }, { "face": "card-2" }], "limit": 4 };
let undefinedHand = undefined;
let notAnArray = '{}';


describe("constructor", function() {
  it("should return an object of array with cards", function() {
    expect(instance.constructor(defaultHand)).toBe(true);
    expect(instance.constructor(undefinedHand)).toBe(false);
    expect(instance.constructor(notAnArray)).toBe(false);
  });
});

describe("addCard", function() {
  it("should add a card in the hand and return true. False if the hand's full", function() {
    console.log("afterAddCard", instance.addCard());
    expect(instance.addCard({ "face": "card-3"})).toBe(true);
    console.log("afterAddCard", instance.addCard());

    if (instance.hand.length >= instance.limit) {
      expect(instance.addCard({ "face": "card-3" })).toBe(false);
    }
  })
});

describe("removeCard", function() {
  it("should remove a card from the hand at a given position and return true if it's working", function() {
    expect(instance.removeCard()).toBe(true);
  })
});

describe("getAllCards", function() {
  it("should return an array of the hand's card", function() {
    expect(instance.hand).toBeDefined();
  })
});

describe("getCardsCount", function() {
  it("should give the current number of cards in the hand", function() {
    expect(instance.hand.length).toBeDefined();
  })
});

