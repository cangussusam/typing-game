

export class GameApiWords{

    static async withDifficulty(arraySize: Number, wordsLength: Number): Promise<Array<String>> {

        const url = `https://random-word-api.herokuapp.com/word?number=${arraySize}&length=${wordsLength}`

        return fetch(url)
            .then(res => res.json())
            .then(words => words)
    }

    static async withoutDifficulty(arraySize: Number): Promise<Array<String>> {

        const url = `https://random-word-api.herokuapp.com/word?number=${arraySize}`

        return fetch(url)
        .then(res => res.json())
        .then(words => words)
    }

}