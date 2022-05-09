export class GameResults {
    ResultValues(boolean, output) {
        let points = 0;
        let errors = 0;
        if (boolean)
            points++;
        else
            errors++;
        console.log(output.innerHTML);
        if (output.innerHTML == '1')
            this.values(points, errors);
    }
    values(points, errors) {
        console.log(points, errors);
    }
}
