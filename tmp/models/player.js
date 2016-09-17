'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _factory = require('./factory');

var _factory2 = _interopRequireDefault(_factory);

var _pawn = require('./pawn');

var _pawn2 = _interopRequireDefault(_pawn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Pawn) {
  _inherits(Player, _Pawn);

  function Player(_ref) {
    var deck = _ref.deck;
    var life = _ref.life;
    var strength = _ref.strength;
    var def = _ref.def;

    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, life, strength, def));

    if (!deck || Array.isArray(deck)) {
      _this.deck = _factory2.default.get('deck');
      _this.board = _factory2.default.get('board');
      _this.hand = _factory2.default.get('hand');
      _this.cemetary = _factory2.default.get('cemetary');
    } else {
      _this.deck = deck;
    }
    return _this;
  }

  _createClass(Player, [{
    key: 'shuffle',
    value: function shuffle() {
      var deck = arguments.length <= 0 || arguments[0] === undefined ? 'deck' : arguments[0];

      if (deck !== 'cemetary' || deck !== 'deck') {
        return false;
      }

      var oldDeck = JSON.stringify(this[deck].pack);
      this[deck].shuffle();
      var newDeck = JSON.stringify(this[deck].pack);

      return oldDeck !== newDeck;
    }
  }, {
    key: 'draw',
    value: function draw() {
      return this.deck.draw();
    }
  }, {
    key: 'playCard',
    value: function playCard(position) {
      var movedCard = this.board.hand.find(function (x) {
        return board.indexOf(x) === position;
      });

      this.board.hand = [].concat(_toConsumableArray(this.board.hand), [movedCard]);

      this.hand.hand = [].concat(_toConsumableArray(this.hand.hand.slice(0, position)), _toConsumableArray(this.slice(position + 1)));
    }
  }, {
    key: 'discard',
    value: function discard(position) {
      var movedCard = this.cemetary.hand.find(function (x) {
        return cemetary.indexOf(x) === position;
      });

      this.cemetary.hand = [].concat(_toConsumableArray(this.cemetary.hand), [movedCard]);

      this.hand.hand = [].concat(_toConsumableArray(this.hand.hand.slice(0, position)), _toConsumableArray(this.slice(position + 1)));
    }
  }, {
    key: 'attack',
    value: function attack() {}
  }]);

  return Player;
}(_pawn2.default);

exports.default = Player;