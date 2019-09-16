"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var buttons = document.getElementsByTagName('button');

var _loop = function _loop(i) {
  var button = buttons[i];
  button.innerText = i;

  button.onclick = function (e) {
    console.log(i);
  };
};

for (var i = 0; i < buttons.length; i++) {
  _loop(i);
}

function c(ent) {
  return console.log(ent);
}

;
var PI = Math.PI;
c(PI);
var staticLanguages = ["C", "C++", "Java"];
var dynamicLanguages = ["Javascript", "PHP", "Ruby"];
var languages = [].concat(staticLanguages, ["C#"], dynamicLanguages, ["Python"]);
console.log(languages);
var canv = document.getElementById('canv');
var ctx = canv.getContext('2d');
console.log(canv);
console.log(ctx);
canv.width = 1200;
canv.height = 200;
var grd = ctx.createLinearGradient(0, 0, canv.width, canv.height);

function makeBackground() {
  grd.addColorStop(0, "red");
  grd.addColorStop(0.16, "orange");
  grd.addColorStop(0.32, "yellow");
  grd.addColorStop(0.48, "green");
  grd.addColorStop(0.64, "lightblue");
  grd.addColorStop(0.80, "blue");
  grd.addColorStop(1, "violet");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, canv.width, canv.height);
}

var y = 100;

var DrawText =
/*#__PURE__*/
function () {
  function DrawText(text_to_draw) {
    _classCallCheck(this, DrawText);

    this.text_to_draw = text_to_draw;
    DrawText.count++;
    this.y = y * DrawText.count;
    canv.height = DrawText.count <= 1 ? canv.height : 100 + 100 * DrawText.count;
  }

  _createClass(DrawText, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.font = "66px Verdana";
      ctx.strokeStyle = "red";
      ctx.fillStyle = "blue";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineWidth = 4;
      ctx.strokeText(this.text_to_draw, canv.width / 2, this.y);
      ctx.fillText(this.text_to_draw, canv.width / 2, this.y);
    }
  }]);

  return DrawText;
}();

DrawText.count = 0;

function greet() {
  var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hallo';
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';
  var fraze = "".concat(greeting, " ").concat(name);
  console.log(fraze);
}

greet();

function sum() {
  var sum = 0;

  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  var oursum = values.reduce(function (prevValue, curentValue) {
    return prevValue + curentValue;
  });
  console.log(oursum);
  return oursum;
}

;
var firstName = 'Bill',
    lastname = 'Gates',
    email = 'billgates@microsoft.com';
var person = {
  firstName: firstName,
  lastname: lastname,
  email: email,
  sayHello: function sayHello() {
    console.log("Hi, my name is ".concat(this.firstName, " ").concat(this.lastname, "!"));
  }
};
person.sayHello();
console.log(person);

var Task =
/*#__PURE__*/
function () {
  function Task() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

    _classCallCheck(this, Task);

    this.title = title;
    this.done = false;
    Task.count++;
    console.log('Создание задачи');
  }

  _createClass(Task, [{
    key: "complete",
    value: function complete() {
      this.done = true;
      console.log("\u0417\u0430\u0434\u0430\u0447\u0430 \"".concat(this.title, "\" \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430!"));
    }
  }], [{
    key: "getDefaultTitle",
    value: function getDefaultTitle() {
      return "Задача";
    }
  }]);

  return Task;
}();

Task.count = 0;
var task = new Task('Убрать комнату');
var task2 = new Task('Купить продукты');
var task3 = new Task('Поспать');
var task4 = new Task('Полежать');
console.log(task.complete());
console.log(task.title); // console.log(task2.title);
// console.log(task3.title);

var print = new DrawText(task.title);
var print2 = new DrawText(task2.title);
var print3 = new DrawText(task3.title);
var print4 = new DrawText(task4.title);
makeBackground();
print.draw();
print2.draw();
print3.draw();
print4.draw();
console.log(Task.count);