"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Markup =
/*#__PURE__*/
function () {
  function Markup(width, height) {
    _classCallCheck(this, Markup);

    this.width = width;
    this.height = height;
  }

  _createClass(Markup, [{
    key: "drawOneLine",
    value: function drawOneLine(y) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      ctx.stroke();
    }
  }, {
    key: "drawOneLineSet",
    value: function drawOneLineSet(y) {
      this.drawOneLine(y + 30);
      this.drawOneLine(y + 50);
      this.drawOneLine(y + 80);
    }
  }, {
    key: "drawHorisontalLines",
    value: function drawHorisontalLines(y) {
      this.drawOneLine(y);

      for (var i = 0; i < this.height - 160; i += 80) {
        this.drawOneLineSet(y + i);
      }
    }
  }, {
    key: "drawRightField",
    value: function drawRightField() {
      ctx.beginPath();
      ctx.moveTo(this.width - 80, 0);
      ctx.lineTo(this.width - 80, this.height);
      ctx.lineWidth = 2; // толщина линии

      ctx.strokeStyle = "#ff0000"; // цвет линии

      ctx.stroke();
      ctx.closePath();
    }
  }, {
    key: "drawObliqueLines",
    value: function drawObliqueLines(x) {
      for (var i = 0; i < this.width + this.height * getTanD(25); i += 120) {
        var x1 = void 0,
            y1 = void 0,
            x2 = void 0,
            y2 = void 0;
        x1 = x + i;
        y1 = 0;
        x2 = 0;
        y2 = x1 * getTanD();
        this.drawObliqueLine(x1, y1, x2, y2);
      }
    }
  }, {
    key: "init",
    value: function init(y) {
      this.drawHorisontalLines(y);
      this.drawRightField();
      this.drawObliqueLines(120);
    }
  }], [{
    key: "drawObliqueLine",
    value: function drawObliqueLine(x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineWidth = 1; // толщина линии

      ctx.strokeStyle = "#000"; // цвет линии

      ctx.stroke();
      ctx.closePath();
    }
  }]);

  return Markup;
}();

function getTanD() {
  var deg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 65;
  var rad = deg * Math.PI / 180;
  return Math.tan(rad);
}

var Letter =
/*#__PURE__*/
function () {
  function Letter() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var dash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Letter);

    this.x = x;
    this.y = y;
    this.dash = dash;
  }

  _createClass(Letter, [{
    key: "letterStyles",
    value: function letterStyles() {
      ctx.lineWidth = 2; // толщина линии

      ctx.strokeStyle = "#0000ff"; // цвет линии

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      if (this.dash) {
        ctx.setLineDash([1, 4]);
      } else ctx.setLineDash([]);
    }
  }, {
    key: "drawKFirst",
    value: function drawKFirst() {
      ctx.moveTo(this.x + 5, this.y - 40);
      ctx.quadraticCurveTo(this.x + 12, this.y - 38, this.x + 50 / getTanD(), this.y - 50);
    }
  }, {
    key: "drawKSecond",
    value: function drawKSecond() {
      ctx.lineTo(this.x + 5 / getTanD(), this.y - 5);
      ctx.quadraticCurveTo(this.x - 5, this.y + 5, this.x - 10, this.y - 5);
    }
  }]);

  return Letter;
}();

var Kletter =
/*#__PURE__*/
function (_Letter) {
  _inherits(Kletter, _Letter);

  function Kletter(x, y, dash) {
    _classCallCheck(this, Kletter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Kletter).call(this, x, y, dash));
  }

  _createClass(Kletter, [{
    key: "drawFirstRight",
    value: function drawFirstRight() {
      ctx.moveTo(this.x + 50 / getTanD() + 18, this.y - 45);
      ctx.quadraticCurveTo(this.x + 50 / getTanD() + 16, this.y - 55, this.x + 50 / getTanD() + 10, this.y - 45);
      ctx.lineTo(this.x + 50 / getTanD() + 4, this.y - 35);
      ctx.quadraticCurveTo(this.x + 56 / getTanD(), this.y - 32, this.x + 30 / getTanD(), this.y - 30);
    }
  }, {
    key: "drawSecondRight",
    value: function drawSecondRight() {
      ctx.quadraticCurveTo(this.x + 65 / getTanD(), this.y - 33, this.x + 56 / getTanD(), this.y - 20);
      ctx.lineTo(this.x + 20 / getTanD() + 10, this.y - 5);
      ctx.quadraticCurveTo(this.x + 15, this.y + 5, this.x + 36, this.y - 5);
    }
  }, {
    key: "drawLetter",
    value: function drawLetter() {
      ctx.beginPath();
      this.letterStyles();
      this.drawKFirst();
      this.drawKSecond();
      ctx.stroke();
      ctx.beginPath();
      this.drawFirstRight();
      this.drawSecondRight();
      ctx.stroke();
      ctx.closePath();
    }
  }]);

  return Kletter;
}(Letter);

var Nletter =
/*#__PURE__*/
function (_Letter2) {
  _inherits(Nletter, _Letter2);

  function Nletter(x, y, dash) {
    _classCallCheck(this, Nletter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Nletter).call(this, x, y, dash));
  }

  _createClass(Nletter, [{
    key: "drawRight",
    value: function drawRight() {
      ctx.moveTo(this.x + 20 / getTanD(), this.y - 20);
      ctx.quadraticCurveTo(this.x + 50 / getTanD() + 10, this.y - 25, this.x + 50 / getTanD() + 18, this.y - 45);
      ctx.quadraticCurveTo(this.x + 50 / getTanD() + 17, this.y - 55, this.x + 50 / getTanD() + 10, this.y - 45);
      ctx.lineTo(this.x + 50 / getTanD() - 9, this.y - 5);
      ctx.quadraticCurveTo(this.x + 11, this.y + 5, this.x + 26, this.y - 5);
    }
  }, {
    key: "drawLetter",
    value: function drawLetter() {
      ctx.beginPath();
      this.letterStyles();
      this.drawKFirst();
      this.drawKSecond();
      ctx.stroke();
      ctx.beginPath();
      this.drawRight();
      ctx.stroke();
      ctx.closePath();
    }
  }]);

  return Nletter;
}(Letter);

var Bletter =
/*#__PURE__*/
function (_Letter3) {
  _inherits(Bletter, _Letter3);

  function Bletter(x, y, dash) {
    _classCallCheck(this, Bletter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Bletter).call(this, x, y, dash));
  }

  _createClass(Bletter, [{
    key: "drawTop",
    value: function drawTop() {
      ctx.moveTo(this.x + 5, this.y - 35);
      ctx.quadraticCurveTo(this.x, this.y - 49, this.x + 50 / getTanD(), this.y - 50);
      ctx.lineTo(this.x + 50 / getTanD() + 25, this.y - 50);
    }
  }, {
    key: "drawRight",
    value: function drawRight() {
      ctx.moveTo(this.x + 20 / getTanD(), this.y - 20);
      ctx.quadraticCurveTo(this.x + 50 / getTanD(), this.y - 35, this.x + 50 / getTanD() + 8, this.y - 20);
      ctx.quadraticCurveTo(this.x + 50 / getTanD() + 8, this.y - 12, this.x + 50 / getTanD() + 1, this.y - 5);
      ctx.quadraticCurveTo(this.x + 50 / getTanD() - 15, this.y + 5, this.x + 10 / getTanD(), this.y - 10);
    }
  }, {
    key: "drawLetter",
    value: function drawLetter() {
      ctx.beginPath();
      this.letterStyles();
      ctx.moveTo(this.x + 50 / getTanD(), this.y - 50);
      this.drawKSecond();
      ctx.stroke();
      ctx.beginPath();
      this.drawTop();
      this.drawRight();
      ctx.stroke();
      ctx.closePath();
    }
  }]);

  return Bletter;
}(Letter);

var canvas = document.getElementById('canv');
var ctx = canvas.getContext('2d');
var letter = document.getElementById('letter');

function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var markup = new Markup(canvas.width, canvas.height);
  letter = document.getElementById('letter');
  markup.init(50);

  for (var i = 0; i < canvas.height - 160; i += 80) {
    for (var j = 0; j < canvas.width - 180; j += 70) {
      var letterDraw = void 0;

      switch (letter.value) {
        case "К":
          letterDraw = j > 200 ? new Kletter(40 + j, 100 + i, true) : new Kletter(40 + j, 100 + i, false);
          break;

        case "Н":
          letterDraw = j > 200 ? new Nletter(40 + j, 100 + i, true) : new Nletter(40 + j, 100 + i, false);
          break;

        case "Б":
          letterDraw = j > 200 ? new Bletter(40 + j, 100 + i, true) : new Bletter(40 + j, 100 + i, false);
          break;
      }

      letterDraw.drawLetter();
    }
  }
}

letter.addEventListener('input', function (e) {
  e.preventDefault();
  initCanvas();
});
initCanvas();
window.addEventListener('resize', function () {
  initCanvas();
});