import { GameSendResults } from "../data/game-send-results.js"
import { GameResults } from "../model/game-results.js"
import { GameSetDifficulty } from "../model/game-setDifficulty.js"
import { GameInicialTimer } from "../view/game-inicialTimer.js"
import { GameSetWords } from "../view/game-setWords.js"
import { GameTimer } from "../view/game-timer.js"

export class GameController {

    private paragraphTimer = document.querySelector('.timer') as HTMLParagraphElement
    private index: number = 0

    private mode: string = 'Easy'
    private difficulty: boolean = true
    private howManyWords = 100
    private roundTime: number = 15


    private points: number = 0
    private errors: number = 0


    public defineGame() {

        this.getWords()
        this.runTimer()
    }

    public startGame(input: HTMLInputElement) {

        this.comparison(input)
    }

    public setIndex(code: string) {
        if (code == 'Space') this.index++
    }

    public inicialTimer(inicialTimer: HTMLDivElement, startDiv: HTMLDivElement, page: HTMLElement){
        GameInicialTimer.run(inicialTimer, startDiv, page)
    }

    private runTimer() {
        GameTimer.showTimer(this.roundTime, this.paragraphTimer)
            .then(res => this.endGame(this.points, this.errors))
    }

    private getWords() {

        if (this.difficulty) GameSetWords.difficulty(this.howManyWords, GameSetDifficulty.mode(this.mode))
        
        else GameSetWords.noDifficulty(this.howManyWords)
    }

    private comparison(input: HTMLInputElement) {

        const allOutputChar = document.querySelectorAll('span')
        const allInputChar = input.value.split(' ')
        const outputPositive = allOutputChar[this.index]
        const inputPositive = allInputChar[this.index]
        
        if (input.value.length == 0) this.index = 0

        if (this.index < this.howManyWords) {

            onkeydown = e => {
                if (e.code == 'Space') {

                    if (outputPositive.innerHTML == inputPositive) {

                        outputPositive.setAttribute("style", "color: #74d534;")
                        return this.points++
                    }

                    if (outputPositive.innerHTML.length > inputPositive.length ||
                        outputPositive.innerHTML.length < inputPositive.length ||
                        outputPositive.innerHTML != inputPositive) {

                        outputPositive.setAttribute("style", "color: #d54534;")
                        return this.errors++
                    }
                }
            }

            if (outputPositive.innerHTML != inputPositive) outputPositive.setAttribute("style", "color: #396d97;")

        }
    }

    private endGame(points: number, errors: number) {

        const results = new GameResults(points, errors, this.roundTime)

        GameSendResults.postAPI(points, errors, results.accuracy, results.wpm)

    }

}
