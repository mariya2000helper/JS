
let input = [850,
    4,
    2];

function solve(input) {
    
    let tenisRacketPrice = Number(input[0]);
    let tenisRacketCounter = Number(input[1]);
    let shoesCounter = Number(input[2]);

    let shoesPrice = tenisRacketPrice / 6;

    let products = tenisRacketPrice * tenisRacketCounter + shoesCounter * shoesPrice;
    let others = products * 0.20;

    let sum = products + others;

    console.log(`Price to be paid by Djokovic ${Math.floor(sum / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sum * 7 / 8)}`);
 }

solve([input]);

