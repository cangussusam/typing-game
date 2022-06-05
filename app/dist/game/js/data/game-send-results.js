var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class GameSendResults {
    static postAPI(points, errors, accuracy, wpm) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'http://localhost:3000';
            const body = {
                "points": points,
                "error": errors,
                "accuracy": accuracy,
                "wpm": wpm
            };
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
                .then(json => console.log(json));
        });
    }
}
