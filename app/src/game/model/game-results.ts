
export class GameResults{

    #points
    #errors
    #time

    constructor(points: number, errors: number, time: number){
        this.#points = points
        this.#errors = errors
        this.#time = time

    }

    get accuracy(){

        const totalWords = this.#points + this.#errors
        const accuracy = (this.#points / totalWords) * 100

        if(!accuracy){
            return 0
        }

        return Math.round(accuracy)
    }

    get wpm(){

        return this.#points / (this.#time / 60)
    }

}