

export class GameSetDifficulty {

    static mode(difficulty: string): number{

        switch(difficulty){
            case 'Easy':
                return 5
            
            case 'Medium': 
                return 8

            case 'Hard':
                return 13
        }

        return 8
    }
}