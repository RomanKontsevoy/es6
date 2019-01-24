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