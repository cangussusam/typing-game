export class GameOutput {
    static showWords(words) {
        const output = document.querySelector('.output');
        const spanAttributte = words.map((word, index) => {
            return words[index] = `<span class="words">${word}</span> `;
        });
        spanAttributte.forEach(word => output.innerHTML += word);
    }
}
