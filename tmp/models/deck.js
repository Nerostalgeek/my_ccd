'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Deck = function () {
  function Deck(config) {
    _classCallCheck(this, Deck);

    if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object' || typeof config.cards === 'undefined' || !Array.isArray(config.cards)) {
      return false;
    }

    this.pack = config.cards;
    console.log(this.pack);
    return true;
  }

  _createClass(Deck, [{
    key: 'shuffle',
    value: function shuffle() {
      var i = 0,
          j = 0,
          temp = null;
      for (i = this.pack.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this.pack[i];
        this.pack[i] = this.pack[j];
        this.pack[j] = temp;
      }
      return this.pack;
    }
  }, {
    key: 'draw',
    value: function draw() {
      if (this.pack.length >= 1) {
        return this.pack[0];
      }
    }
  }, {
    key: 'getCardsCount',
    value: function getCardsCount() {
      return this.pack.length;
    }
  }]);

  return Deck;
}();

exports.default = Deck;