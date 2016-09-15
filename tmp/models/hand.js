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

    this.pack = config.cards;
    console.log("model", this.pack);
    return true;
  }

  _createClass(Hand, [{
    key: 'addCard',
    value: function addCard() {}
  }, {
    key: 'removeCard',
    value: function removeCard(position) {}
  }, {
    key: 'getAllCards',
    value: function getAllCards() {
      return this.pack;
    }
  }, {
    key: 'getCardsCount',
    value: function getCardsCount() {
      return this.pack.length;
    }
  }]);

  return Hand;
}();

exports.default = Hand;