'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseClass2 = require('./BaseClass');

var _BaseClass3 = _interopRequireDefault(_BaseClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExtendedClass = function (_BaseClass) {
  _inherits(ExtendedClass, _BaseClass);

  function ExtendedClass() {
    _classCallCheck(this, ExtendedClass);

    var _this = _possibleConstructorReturn(this, (ExtendedClass.__proto__ || Object.getPrototypeOf(ExtendedClass)).call(this));

    _this.name = 'ExtendedClass';
    return _this;
  }

  _createClass(ExtendedClass, [{
    key: 'ExtendedFunc',
    value: function ExtendedFunc() {
      var msg = 'I\'m a method of ' + this.name + '.';
      console.log(msg);
    }
  }]);

  return ExtendedClass;
}(_BaseClass3.default);

exports.default = ExtendedClass;