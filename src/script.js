var buttons = document.getElementsByTagName('button');
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.innerText = i;
    button.onclick = function (e) {
        console.log(i)
    }
}

function c(ent) {
    return console.log(ent);
};

const PI = Math.PI;

c(PI);

let staticLanguages = ["C", "C++", "Java"];
let dynamicLanguages = ["Javascript", "PHP", "Ruby"];
let languages = [...staticLanguages, "C#", ...dynamicLanguages, "Python"];

console.log(languages);

function greet(name) {
    console.log(`Hallo, ${name}`.toUpperCase());
}

greet("roma");

let canv = document.getElementById('canv');
const ctx = canv.getContext('2d');

canv.width = 1200;
canv.height = 200;

let grd = ctx.createLinearGradient(0, 0, canv.width, canv.height);
function makeBackground () {
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

function drawText() {
    ctx.beginPath();
    ctx.font = "66px Verdana";
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";
    ctx.textBaseline="middle";
    ctx.lineWidth = 4;
    ctx.strokeText("Тестовый баннер", canv.width/2, canv.height/2);
    ctx.fillText("Тестовый баннер", canv.width/2, canv.height/2);
    let text = ctx.measureText("Тестовый баннер");
    console.log(text);
}

makeBackground();
drawText();