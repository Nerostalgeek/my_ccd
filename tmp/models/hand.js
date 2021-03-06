'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hand = function () {
  function Hand(config) {
    _classCallCheck(this, Hand);

    if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object' || typeof config.cards === 'undefined' || !Array.isArray(config.cards)) {
      return false;
    }

    this.hand = config.cards;
    this.limit = config.limit;
    console.log("modelHand", this.hand);
    console.log("modelHandLimit", this.limit);
    return true;
  }

  _createClass(Hand, [{
    key: 'addCard',
    value: function addCard(card) {
      console.log("length", this.hand.length);
      if (this.hand.length >= this.limit) {
        return false;
      }
      this.hand.splice(this.hand.length, 0, card);
      return true;
    }
  }, {
    key: 'removeCard',
    value: function removeCard() {
      var position = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];


      var retour = this.hand.splice(position, 1);
      return retour.length > 0;
    }
  }, {
    key: 'getAllCards',
    value: function getAllCards() {
      return this.hand;
    }
  }, {
    key: 'getCardsCount',
    value: function getCardsCount() {
      return this.hand.length;
    }
  }]);

  return Hand;
}();

exports.default = Hand;