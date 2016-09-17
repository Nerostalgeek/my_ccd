"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventManager = require("../eventManager");

var _eventManager2 = _interopRequireDefault(_eventManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Abstract = function (_EventManager) {
  _inherits(Abstract, _EventManager);

  function Abstract() {
    _classCallCheck(this, Abstract);

    return _possibleConstructorReturn(this, (Abstract.__proto__ || Object.getPrototypeOf(Abstract)).call(this));
  }

  return Abstract;
}(_eventManager2.default);

exports.default = Abstract;