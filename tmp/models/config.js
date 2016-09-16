'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _game = require('./game');

var _game2 = _interopRequireDefault(_game);

var _deck = require('./deck');

var _deck2 = _interopRequireDefault(_deck);

var _player = require('./player');

var _player2 = _interopRequireDefault(_player);

var _hand = require('./hand');

var _hand2 = _interopRequireDefault(_hand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  "game": {
    "class": _game2.default,
    "param": '{}'
  },
  "deck": {
    "class": _deck2.default,
    "param": '{"cards" : [{"face":"card-1"}, {"face":"card-2"}]}'
  },
  "player": {
    "class": _player2.default,
    "param": '{}'
  },
  "hand": {
    "class": _hand2.default,
    "param": '{"cards" : [{"face":"card-1"}, {"face":"card-2"}],  "limit": 7 }'

  }
};