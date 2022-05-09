var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class GameApiWords {
    static withDifficulty(arraySize, wordsLength) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://random-word-api.herokuapp.com/word?number=${arraySize}&length=${wordsLength}`;
            return fetch(url)
                .then(res => res.json())
                .then(words => words);
        });
    }
    static withoutDifficulty(arraySize) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://random-word-api.herokuapp.com/word?number=${arraySize}`;
            return fetch(url)
                .then(res => res.json())
                .then(words => words);
        });
    }
}
