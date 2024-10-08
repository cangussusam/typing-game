import { GameSendResults } from "../data/game-send-results.js";
import { GameResults } from "../model/game-results.js";
import { GameSetDifficulty } from "../model/game-setDifficulty.js";
import { GameInicialTimer } from "../view/game-inicialTimer.js";
import { GameSetWords } from "../view/game-setWords.js";
import { GameTimer } from "../view/game-timer.js";
export class GameController {
    constructor() {
        this.paragraphTimer = document.querySelector('.timer');
        this.index = 0;
        this.mode = 'Easy';
        this.difficulty = true;
        this.howManyWords = 100;
        this.roundTime = 15;
        this.points = 0;
        this.errors = 0;
    }
    defineGame() {
        this.getWords();
        this.runTimer();
    }
    startGame(input) {
        this.comparison(input);
    }
    setIndex(code) {
        if (code == 'Space')
            this.index++;
    }
    inicialTimer(inicialTimer, startDiv, page) {
        GameInicialTimer.run(inicialTimer, startDiv, page);
    }
    runTimer() {
        GameTimer.showTimer(this.roundTime, this.paragraphTimer)
            .then(res => this.endGame(this.points, this.errors));
    }
    getWords() {
        if (this.difficulty)
            GameSetWords.difficulty(this.howManyWords, GameSetDifficulty.mode(this.mode));
        else
            GameSetWords.noDifficulty(this.howManyWords);
    }
    comparison(input) {
        const allOutputChar = document.querySelectorAll('span');
        const allInputChar = input.value.split(' ');
        const outputPositive = allOutputChar[this.index];
        const inputPositive = allInputChar[this.index];
        if (input.value.length == 0)
            this.index = 0;
        if (this.index < this.howManyWords) {
            onkeydown = e => {
                if (e.code == 'Space') {
                    if (outputPositive.innerHTML == inputPositive) {
                        outputPositive.setAttribute("style", "color: #74d534;");
                        return this.points++;
                    }
                    if (outputPositive.innerHTML.length > inputPositive.length ||
                        outputPositive.innerHTML.length < inputPositive.length ||
                        outputPositive.innerHTML != inputPositive) {
                        outputPositive.setAttribute("style", "color: #d54534;");
                        return this.errors++;
                    }
                }
            };
            if (outputPositive.innerHTML != inputPositive)
                outputPositive.setAttribute("style", "color: #396d97;");
        }
    }
    endGame(points, errors) {
        const results = new GameResults(points, errors, this.roundTime);
        GameSendResults.postAPI(points, errors, results.accuracy, results.wpm);
    }
}
