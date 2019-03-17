
let input = [2,
    12,
    1200,
    10,];

function solve(input) {
    let minutes = Number(input[0]);
    let seconds = Number(input[1]);

    let length = Number(input[2]);
    let seconds100m = Number(input[3]);

    let controle = minutes * 60 + seconds;
    let down = length / 120;
    let summary = down * 2.5
    let time = (length / 100) * seconds100m - summary;
    
    let failed = time - controle;

    if (controle > time) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${(time).toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${failed.toFixed(3)} second slower.`);
    }
}

solve([input]);
