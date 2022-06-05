import { GameController } from "./controller/game-controller.js";
const input = document.querySelector('.input');
const inicialTimer = document.querySelector('.inicial__timer');
const page = document.querySelector('.main');
const startDiv = document.querySelector('.start');
const controller = new GameController;
let index = 0;
function main() {
    controller.inicialTimer(inicialTimer, startDiv, page);
    controller.defineGame();
}
main();
input.addEventListener('input', function () {
    controller.startGame(input);
});
document.addEventListener('keydown', event => {
    const allInputChar = input.value.split(' ');
    if (event.code == 'Space') {
        if (input.value.length == 0) {
            event.preventDefault();
            index = 0;
        }
        if (allInputChar[index] == '')
            event.preventDefault();
        else {
            controller.setIndex(event.code);
            index++;
        }
    }
    if (event.code == 'Backspace' && allInputChar[index] == '')
        event.preventDefault();
    if (event.code == 'Enter')
        event.preventDefault();
});
