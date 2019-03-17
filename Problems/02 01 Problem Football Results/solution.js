
let input = ['4:2',
    '0:3',
    '1:0'];

function solve(input) {

    let result1 = input[0].split(':');
    let result2 = input[1].split(':');
    let result3 = input[2].split(':');

    let win = 0;
    let lose = 0;
    let equal = 0;    

    if (+result1[0] === +result1[1]) {
        equal++;
    } else if (+result1[0] < +result1[1]) {
        lose++;
    } else if (+result1[0] > +result1[1]){
        win++;
    }

    if (+result2[0] === +result2[1]) {
        equal++;
    } else if (+result2[0] < +result2[1]) {
        lose++;
    } else if (+result2[0] > +result2[1]){
        win++;
    }

    if (+result3[0] === +result3[1]) {
        equal++;
    } else if (+result3[0] < +result3[1]) {
        lose++;
    } else if (+result3[0] > +result3[1]){
        win++;
    }

    let obj = {
        'win': win,
        'lose': lose,
        'equal': equal,
    };

    console.log(`Team won ${obj.win} games.`);
    console.log(`Team lost ${obj.lose} games.`);
    console.log(`Drawn games: ${obj.equal}`);
}

solve([input]);

