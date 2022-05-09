
import { GameApiWords } from "../api/game-api-words.js";
import { GameOutput } from "../view/game-output.js";

export class GameSetWords {

    static async difficulty(howManyWords: number, howManyLetters: number) {

        GameApiWords.withDifficulty(howManyWords, howManyLetters)
            .then(wordArray => GameOutput.showWords(wordArray))

    }

    static async noDifficulty(howManyWords: number) {
        GameApiWords.withoutDifficulty(howManyWords)
            .then(wordArray => GameOutput.showWords(wordArray))

    }
}
