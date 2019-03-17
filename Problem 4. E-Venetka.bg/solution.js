
let input = [
    {model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
    {model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
    {model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
    {model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
    {model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3},

    {model: 'BMW', regNumber: 'A3423SS', town: 'Varna', price: 6},
    {model: 'BMW', regNumber: 'A3423SA', town: 'Gabrovo', price: 11},
    
    {model: 'Lada', regNumber: 'A3423S4', town: 'Sevlievo', price: 2},
    {model: 'Lada', regNumber: 'A3423S5', town: 'Sevlievo', price: 2 + 3},
    {model: 'Lada', regNumber: 'A3423S6', town: 'Sevlievo', price: 1},
    {model: 'Tesla', regNumber: 'A3423S7', town: 'Sevlievo', price: 12},

    {model: 'bosch', regNumber: 'A3423S8', town: 'Sevlievo', price: 1},
    {model: 'bosch', regNumber: 'A3423S9', town: 'Sevlievo', price: 1},
    {model: 'bosch', regNumber: 'A3423S11', town: 'Sevlievo', price: 1},

    {model: 'BMW', regNumber: 'A3423S1', town: 'Sevlievo', price: 1},
    {model: 'BMW', regNumber: 'A3423S2', town: 'Sevlievo', price: 5},
    {model: 'BMW', regNumber: 'A3423S3', town: 'Sevlievo', price: 5},
];

function solve(input) {

    let objectProfit = {}; 
    let townWithMostProfit = '';
    let objectModel = {}; 
    let modelWithMostProfit = '';
    let registerNumbers = {}

    input.forEach((element) => {

        let town = element.town;
        let profit = 0;
        let countVignettes = 0;

        if (!objectProfit.hasOwnProperty(town)) {
            
            objectProfit[town] = {
                "profit": profit + element.price,
                "countVignettes": countVignettes + 1, 
            }

            Object.keys(objectProfit).sort((a, b) => {                              
                return a - b;
            });
            
        } else {            
            objectProfit[town].profit = +objectProfit[town].profit + element.price;
            objectProfit[town].countVignettes = +objectProfit[town].countVignettes + 1;  
        }

    });  

    let getTownWithMostProfit = function () {
        let maxProfit = 0;
        for (var key in objectProfit) {        
            if (objectProfit[key].profit > maxProfit) {
                maxProfit = objectProfit[key].profit;
            }
            if (objectProfit[key].profit < maxProfit) {
                delete objectProfit[key];
            }
        } 
        
        let countVignettes = 0;
        for (var key in objectProfit) {        
            if (objectProfit[key].countVignettes > countVignettes) {
                countVignettes = objectProfit[key].countVignettes;
            }
            if (objectProfit[key].countVignettes < countVignettes) {
                delete objectProfit[key];
            }
        } 

        let objectProfitSorted = {};

        Object.keys(objectProfit).sort().forEach(k => {
            objectProfitSorted[k] = objectProfit[k];
        });    
        
        for (var key in objectProfitSorted) {
            console.log(`${key} is most profitable - ${objectProfitSorted[key].profit} BGN`);
            townWithMostProfit = key;
            break;
        } 
    };

    getTownWithMostProfit();  
    
    input.forEach((element) => {          
        if (element.town === townWithMostProfit) {
            if (!objectModel.hasOwnProperty(element.model)) {
                objectModel[element.model] =  {"modelCounter": 1, "vignettePrice": element.price};                
            } else {
                objectModel[element.model].modelCounter =  objectModel[element.model].modelCounter + 1;
                if (element.price > objectModel[element.model].vignettePrice) {
                    objectModel[element.model].vignettePrice = element.price;
                }
            }             
        }         
    });
    
    let getMostProfitableModel = function () {
        let modelCounter = 0;
        for (var key in objectModel) {        
            if (objectModel[key].modelCounter > modelCounter) {
                modelCounter = objectModel[key].modelCounter;
            }
            if (objectModel[key].modelCounter < modelCounter) {
                delete objectModel[key];
            }

        }   

        let maxVignettePrice = 0;
        for (var key in objectModel) {        
            if (objectModel[key].vignettePrice > maxVignettePrice) {
                maxVignettePrice = objectModel[key].vignettePrice;
            }
            if (objectModel[key].vignettePrice < maxVignettePrice) {
                delete objectModel[key];
            }
        }        
        
        let objectModelSorted = {};

        Object.keys(objectModel).sort().forEach(k => {
            objectModelSorted[k] = objectModel[k];
        });    

        let printCounter = 0;
        Object.keys(objectModelSorted).forEach(model => {
            if (printCounter === 0) {
                console.log(`Most driven model: ${model}`);
                modelWithMostProfit = model;
            }
            printCounter++;            
        });       
    }

    getMostProfitableModel();  

    input.forEach((element) => {
        if (element.model === modelWithMostProfit) {
            
            if (!registerNumbers.hasOwnProperty(element.town)) {
                registerNumbers[element.town] = [
                    element.regNumber
                ];
            } else {
                let registerNumbersArray = registerNumbers[element.town];
                registerNumbersArray.push(element.regNumber); 
                registerNumbersArray.sort();               
                registerNumbers[element.town] = registerNumbersArray;
            }
        }
    });

    let getRegisterNumbers = function () {
        let registerNumbersSorted = {};

        Object.keys(registerNumbers).sort().forEach(k => {
            registerNumbersSorted[k] = registerNumbers[k];
        });   
        
        Object.keys(registerNumbersSorted).forEach(k => {
            console.log(k + ': ' + registerNumbersSorted[k].join(', '));
        });
    }

    getRegisterNumbers();    
    
}

solve(input);



