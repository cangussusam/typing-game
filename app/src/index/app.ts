
const start = document.querySelector('#start') as HTMLParagraphElement
const ranking = document.querySelector('#ranking') as HTMLParagraphElement
const howToPlay = document.querySelector('#howToPlay') as HTMLParagraphElement
const project = document.querySelector('#project') as HTMLParagraphElement

const startPopup = document.querySelector('.popup')
const startClose = document.querySelector('.close') as HTMLButtonElement

const htpPopup = document.querySelector('.htp__popup')
const htpClose = document.querySelector('.htp__close') as HTMLButtonElement

start.addEventListener('click', function(){

    if(startPopup){
        startPopup.setAttribute("style", "display: block;")
    }
})

startClose.addEventListener('click', function(){
    if(startPopup){
        startPopup.classList.add('popout')
        setTimeout(() => {
            startPopup.setAttribute("style", "display: none;")
            startPopup.classList.remove('popout')
        },900)
    }
})

howToPlay.addEventListener('click', function(){
    console.log('oi')
    if(htpPopup){
        htpPopup.setAttribute("style", "display: block;")
    }
})

htpClose.addEventListener('click', function(){
    if(htpPopup){
        htpPopup.classList.add('popout')
        setTimeout(() => {
            htpPopup.setAttribute("style", "display: none;")
            htpPopup.classList.remove('popout')
        },900)
    }
})
