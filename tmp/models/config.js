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

var _board = require('./board');

var _board2 = _interopRequireDefault(_board);

var _cemetary = require('./cemetary');

var _cemetary2 = _interopRequireDefault(_cemetary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  "game": {
    "class": _game2.default,
    "param": '{"up":{},"down":{}}'
  },
  "deck": {
    "class": _deck2.default,
    "param": '{"cards" : [{"face":"card-1"}, {"face":"card-2"}]}'
  },
  "player": {
    "class": _player2.default,
    "param": '{"deck": [], "life": 100, "def": 100, "strength": 10}'
  },
  "hand": {
    "class": _hand2.default,
    "param": '{"cards" : [],  "limit": 7 }'
  },
  "board": {
    "class": _board2.default,
    "param": '{"cards" : [],  "limit": 999999999 }'
  },
  "cemetary": {
    "class": _cemetary2.default,
    "param": '{"cards" : [] }'
  }

};