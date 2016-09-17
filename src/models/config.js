import GameModel from './game';
import DeckModel from './deck';
import PlayerModel from './player';
import HandModel from './hand';

export default {
  "game": {
    "class": GameModel,
    "param": '{}'
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
    "param": '{"cards" : [{"face":"card-1"}, {"face":"card-2"}],  "limit": 7 }',
  },
}