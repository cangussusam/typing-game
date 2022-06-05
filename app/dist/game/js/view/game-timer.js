export class GameTimer {
    static showTimer(time, output) {
        return new Promise((resolve, reject) => {
            try {
                const temp = setInterval(() => {
                    const actualTime = 4 + time--;
                    output.innerHTML = `<p class="timer__title">Time left: </p><p class="timer__number">${actualTime.toString()}</p>`;
                    const number = document.querySelector('.timer__number');
                    if (!actualTime) {
                        clearInterval(temp);
                        number.setAttribute("style", "animation: none");
                        resolve(true);
                    }
                    if (actualTime < 11) {
                        number.classList.remove('timer__number');
                        number.classList.add('timer__ten');
                    }
                }, 1000);
            }
            catch (_a) {
                reject(false);
            }
        });
    }
}
