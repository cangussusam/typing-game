
export class GameOutput{



    static showWords(words: String[]){

        const output = document.querySelector('.output') as HTMLParagraphElement

        const spanAttributte = words.map((word, index) => {
            return words[index] = `<span class="words">${word}</span> `
        })

        spanAttributte.forEach(word => output.innerHTML += word)
        
    }

}