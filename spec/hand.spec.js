let handModel = require('../src/models/hand.js');
let instance = new handModel.default;

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


describe("getCardsCount", function() {
  it("should give the current number of cards in the hand", function() {
    expect(instance.pack.length).toBeDefined();
  })
});
describe("getAllCards", function() {
  it("should return an array of the hand's card", function() {
    expect(instance.pack).toBeDefined();
  })
});
