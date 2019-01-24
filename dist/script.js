"use strict";

var buttons = document.getElementsByTagName('button');
console.log(buttons);

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