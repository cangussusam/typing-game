var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GameApiWords } from "../api/game-api-words.js";
import { GameOutput } from "../view/game-output.js";
export class GameSetWords {
    static difficulty(howManyWords, howManyLetters) {
        return __awaiter(this, void 0, void 0, function* () {
            GameApiWords.withDifficulty(howManyWords, howManyLetters)
                .then(wordArray => GameOutput.showWords(wordArray));
        });
    }
    static noDifficulty(howManyWords) {
        return __awaiter(this, void 0, void 0, function* () {
            GameApiWords.withoutDifficulty(howManyWords)
                .then(wordArray => GameOutput.showWords(wordArray));
        });
    }
}
