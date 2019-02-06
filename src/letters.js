class Markup {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    drawOneLine(y) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(this.width, y);
        ctx.stroke();
    }

    drawOneLineSet(y) {
        this.drawOneLine(y + 30);
        this.drawOneLine(y + 50);
        this.drawOneLine(y + 80);
    }

    drawHorisontalLines(y) {
        this.drawOneLine(y);
        for (let i = 0; i < this.height - 160; i += 80) {
            this.drawOneLineSet(y + i);
        }
    }

    drawRightField() {
        ctx.beginPath();
        ctx.moveTo(this.width - 80, 0);
        ctx.lineTo(this.width - 80, this.height);
        ctx.lineWidth = 2; // толщина линии
        ctx.strokeStyle = "#ff0000"; // цвет линии
        ctx.stroke();
        ctx.closePath();
    }

    static drawObliqueLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = 1; // толщина линии
        ctx.strokeStyle = "#000"; // цвет линии
        ctx.stroke();
        ctx.closePath();
    }

    drawObliqueLines(x) {
        for (let i = 0; i < this.width + this.height * getTanD(25); i += 120) {
            let x1, y1, x2, y2;
            x1 = x + i;
            y1 = 0;
            x2 = 0;
            y2 = x1 * getTanD();
            this.drawObliqueLine(x1, y1, x2, y2);
        }
    }

    init(y) {
        this.drawHorisontalLines(y);
        this.drawRightField();
        this.drawObliqueLines(120);
    }
}

function getTanD(deg = 65) {
    let rad = deg * Math.PI / 180;
    return Math.tan(rad);
}

class Letter {
    constructor(x = 50, y = 100, dash = false) {
        this.x = x;
        this.y = y;
        this.dash = dash;
    }

    letterStyles () {
        ctx.lineWidth = 2; // толщина линии
        ctx.strokeStyle = "#0000ff"; // цвет линии
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        if (this.dash) {ctx.setLineDash([1, 4])}
        else ctx.setLineDash([])
    }

    drawKFirst () {
        ctx.moveTo(this.x+5, this.y - 40);
        ctx.quadraticCurveTo(this.x + 12, this.y - 38, this.x + 50 / getTanD(), this.y - 50);
    }

    drawKSecond () {
        ctx.lineTo(this.x + 5 / getTanD(), this.y - 5);
        ctx.quadraticCurveTo(this.x - 5, this.y + 5, this.x - 10, this.y - 5);
    }
}

class Kletter extends Letter {
    constructor(x, y, dash) {
        super(x, y, dash);
    }

    drawFirstRight () {
        ctx.moveTo(this.x + 50 / getTanD() + 18, this.y - 45);
        ctx.quadraticCurveTo(this.x + 50 / getTanD() + 16, this.y - 55, this.x + 50 / getTanD() + 10, this.y - 45);
        ctx.lineTo(this.x + 50 / getTanD()+4, this.y - 35);
        ctx.quadraticCurveTo(this.x + 56 / getTanD(), this.y - 32, this.x + 30 / getTanD(), this.y - 30);
    }

    drawSecondRight () {
        ctx.quadraticCurveTo(this.x + 65 / getTanD(), this.y - 33, this.x + 56 / getTanD(), this.y - 20);
        ctx.lineTo(this.x + 20 / getTanD() + 10, this.y - 5);
        ctx.quadraticCurveTo(this.x + 15, this.y + 5, this.x + 36, this.y - 5);
    }

    drawLetter() {
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
}

class Nletter extends Letter {
    constructor(x, y, dash) {
        super(x, y, dash);
    }

    drawRight () {
        ctx.moveTo(this.x + 20 / getTanD(), this.y - 20);
        ctx.quadraticCurveTo(this.x + 50 / getTanD() + 10, this.y - 25, this.x + 50 / getTanD() + 18, this.y - 45);
        ctx.quadraticCurveTo(this.x + 50 / getTanD() + 17, this.y - 55, this.x + 50 / getTanD() + 10, this.y - 45);
        ctx.lineTo(this.x + 50 / getTanD() - 9, this.y - 5);
        ctx.quadraticCurveTo(this.x + 11, this.y + 5, this.x + 26, this.y - 5);
    }

    drawLetter() {
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
}

class Bletter extends Letter {
    constructor(x, y, dash) {
        super(x, y, dash);
    }

    drawTop () {
        ctx.moveTo(this.x+5, this.y - 35);
        ctx.quadraticCurveTo(this.x, this.y - 49, this.x + 50 / getTanD(), this.y - 50);
        ctx.lineTo(this.x + 50 / getTanD() + 25, this.y - 50);
    }

    drawRight () {
        ctx.moveTo(this.x + 20 / getTanD(), this.y - 20);
        ctx.quadraticCurveTo(this.x + 50 / getTanD(), this.y - 35, this.x + 50 / getTanD() + 8, this.y - 20);
        ctx.quadraticCurveTo(this.x + 50 / getTanD()+8, this.y - 12, this.x + 50 / getTanD()+1, this.y - 5);
        ctx.quadraticCurveTo(this.x + 50 / getTanD() -15, this.y +5, this.x + 10 / getTanD(), this.y - 10);
    }

    drawLetter() {
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
}

let canvas = document.getElementById('canv');
let ctx = canvas.getContext('2d');
let letter = document.getElementById('letter');

function initCanvas () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let markup = new Markup(canvas.width, canvas.height);
    letter = document.getElementById('letter');
    markup.init(50);

    for (let i = 0; i < canvas.height - 160; i+=80) {
        for (let j = 0; j < canvas.width - 180; j+=70) {
            let letterDraw;
            switch (letter.value) {
                case "К":
                    letterDraw = j>200 ? new Kletter(40+j, 100+i, true) : new Kletter(40+j, 100+i, false);
                    break;
                case "Н":
                    letterDraw = j>200 ? new Nletter(40+j, 100+i, true) : new Nletter(40+j, 100+i, false);
                    break;
                    case "Б":
                    letterDraw = j>200 ? new Bletter(40+j, 100+i, true) : new Bletter(40+j, 100+i, false);
                    break;
            }
            letterDraw.drawLetter();
        }
    }
}

letter.addEventListener('input', (e) => {
    e.preventDefault();
    initCanvas();
});


initCanvas();

window.addEventListener('resize', () => {
    initCanvas();
});

