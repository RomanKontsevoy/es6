var buttons = document.getElementsByTagName('button');

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

let canv = document.getElementById('canv');
const ctx = canv.getContext('2d');
console.log(canv);
console.log(ctx);

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

let y = 100;

class DrawText {
    constructor(text_to_draw){
        this.text_to_draw = text_to_draw;
        DrawText.count++;
        this.y = y * DrawText.count;
        canv.height = DrawText.count <= 1 ? canv.height : 100+ 100 * DrawText.count;
    }
    draw(){
        ctx.beginPath();
        ctx.font = "66px Verdana";
        ctx.strokeStyle = "red";
        ctx.fillStyle = "blue";
        ctx.textAlign = "center";
        ctx.textBaseline="middle";
        ctx.lineWidth = 4;
        ctx.strokeText(this.text_to_draw, canv.width/2, this.y);
        ctx.fillText(this.text_to_draw, canv.width/2, this.y);
    }
}
DrawText.count = 0;


function greet(greeting = 'Hallo', name = 'friend') {
    let fraze = `${greeting} ${name}`;
    console.log(fraze);
}

greet();

function sum(...values) {
    let sum = 0;

    let oursum = values.reduce(function (prevValue, curentValue) {
        return prevValue + curentValue;
    });
    console.log(oursum);
    return oursum;
};

let firstName = 'Bill',
    lastname = 'Gates',
    email = 'billgates@microsoft.com';

let person = {
    firstName,
    lastname,
    email,
    sayHello() {
        console.log(`Hi, my name is ${this.firstName} ${this.lastname}!`);
    }
}

person.sayHello();

console.log(person);

class Task {
    constructor(title = Task.getDefaultTitle()){
        this.title = title;
        this.done = false;
        Task.count++;
        console.log('Создание задачи')
    }

    complete() {
        this.done = true;
        console.log(`Задача \"${this.title}\" выполнена!`)
    }

    static getDefaultTitle(){
        return "Задача";
    }
}
Task.count = 0;

let task = new Task('Убрать комнату');
let task2 = new Task('Купить продукты');
let task3 = new Task('Поспать');
let task4 = new Task('Полежать');


console.log(task.complete());
console.log(task.title);
// console.log(task2.title);
// console.log(task3.title);

let print = new DrawText(task.title);
let print2 = new DrawText(task2.title);
let print3 = new DrawText(task3.title);
let print4 = new DrawText(task4.title);
makeBackground();

print.draw();
print2.draw();
print3.draw();
print4.draw();

console.log(Task.count);