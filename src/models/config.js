import GameModel from './game';
import DeckModel from './deck';
import PlayerModel from './player';
import HandModel from './hand';
import BoardModel from './board';
import CemetaryModel from './cemetary';


export default {
  "game": {
    "class": GameModel,
    "param": '{"up":{},"down":{}}'
  },
  "deck": {
    "class": DeckModel,
    "param": '{"cards" : [{"face":"card-1"}, {"face":"card-2"}]}'
  },
  "player": {
    "class": PlayerModel,
    "param": '{"deck": [], "life": 100, "def": 100, "strength": 10}'
  },
  "hand": {
    "class": HandModel,
    "param": '{"cards" : [],  "limit": 7 }',
  },
  "board": {
    "class": BoardModel,
    "param": '{"cards" : [],  "limit": 999999999 }',
  },
  "cemetary": {
    "class": CemetaryModel,
    "param": '{"cards" : [] }',
  }


}