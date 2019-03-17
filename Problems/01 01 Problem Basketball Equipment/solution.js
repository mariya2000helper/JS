
let input = [520];

function solve(inputArr) {
    
    let input = Number(inputArr[0]);

    let shoes = Number(input) - Number(input) * 0.4;
    let equipment = Number(shoes) - Number(shoes) * 0.2;
    let ball = Number(equipment) / 4;
    let accessories = Number(ball) / 5;

    let obj = {
        'input': input,
        'shoes': shoes,
        'equipment': equipment,
        'ball': ball,
        'accessories': accessories
    }

    let sum = obj.shoes + obj.equipment + obj.ball + obj.accessories + obj.input;

    if (sum <= 0) {
        console.log(`0.00`);
        return;    
    }

    if (sum * 100 % 10 === 0) {
        console.log(`${parseFloat(sum.toFixed(2))}0`);
        return;    
    }

    if (sum * 100 % 100 === 0) {
        console.log(`${parseFloat(sum.toFixed(2))}00`);
        return;    
    }

    console.log(`${parseFloat(sum.toFixed(2))}`);
}

solve([input]);



