

export class GameInicialTimer {

    static run(inicialTimer: HTMLDivElement, startDiv: HTMLDivElement, page: HTMLElement){
        
        let screenTimer = 3
        let controllTimer = 4

        const interval = setInterval(()=>{

            const scrnTimer = screenTimer--
            const temp = controllTimer--
            
            inicialTimer.innerHTML = scrnTimer.toString()

            if(!scrnTimer) inicialTimer.innerHTML = 'Start!'

            if(!temp){
                clearInterval(interval)
                page.setAttribute("style", "display: block")
                inicialTimer.setAttribute("style", "display: none;")
                startDiv.setAttribute("style", "margin: 0;")
            }
        }, 1000)

    }
}