
export class GameSendResults {
    
    static async postAPI(points: number, errors: number, accuracy: number, wpm: number) {
    
        const url = 'http://localhost:3000'

        const body = {
            "points": points,
            "error": errors,
            "accuracy": accuracy,
            "wpm": wpm
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
            .then(json => console.log(json))
       
    }
}