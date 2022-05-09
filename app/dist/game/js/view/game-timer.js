export class GameTimer {
    static showTimer(time, output) {
        return new Promise((resolve, reject) => {
            try {
                const temp = setInterval(() => {
                    const actualTime = 3 + time--;
                    output.innerHTML = `Time left: ${actualTime.toString()}`;
                    if (!actualTime) {
                        clearInterval(temp);
                        resolve(true);
                    }
                }, 1000);
            }
            catch (_a) {
                reject(false);
            }
        });
    }
}
