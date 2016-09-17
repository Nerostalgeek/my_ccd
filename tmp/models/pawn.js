"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstract = require("./abstract");

var _abstract2 = _interopRequireDefault(_abstract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pawn = function (_Abstract) {
  _inherits(Pawn, _Abstract);

  function Pawn(life, strength, def) {
    _classCallCheck(this, Pawn);

    var _this = _possibleConstructorReturn(this, (Pawn.__proto__ || Object.getPrototypeOf(Pawn)).call(this));

    _this.life = life;
    _this.strength = strength;
    _this.def = def;
    return _this;
  }

  _createClass(Pawn, [{
    key: "getLife",
    value: function getLife() {
      return this.life;
    }
  }, {
    key: "getStrength",
    value: function getStrength() {
      return this.strength;
    }
  }, {
    key: "getDef",
    value: function getDef() {
      return this.def;
    }
  }, {
    key: "attack",
    value: function attack(target) {
      if (target instanceof Pawn) {
        return target.receiveAttack(this);
      }

      return false;
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(opponent) {
      var strikeBack = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      if (strikeBack === true) {
        opponent.life -= this.getDef();
      }

      this.life -= opponent.getStrength();

      return true;
    }
  }]);

  return Pawn;
}(_abstract2.default);

exports.default = Pawn;