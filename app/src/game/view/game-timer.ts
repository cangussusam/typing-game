
export class GameTimer {

    static showTimer(time: number, output: HTMLParagraphElement){

        return new Promise((resolve, reject) => {
            try{ const temp = setInterval(() => {
                const actualTime = 3 + time--
                output.innerHTML = `Time left: ${actualTime.toString()}`
            
                if(!actualTime){
                    clearInterval(temp)
                    resolve(true)
                }
                }, 1000)
            }
            catch{
                reject(false)
            }
        })
            
    }
}

