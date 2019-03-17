function solve(callback) {
    
    let textareaString = "";

    let tds = document.getElementsByClassName('seat');  
    let arrayTds = Array.from(tds);

    let summary = document.querySelector("#summary").childNodes[0]; 

    let textarea = document.getElementById('output');

    let money = 0;
    let sumMoney = 0;
    let fans = 0;
    let sumFans = 0;     

    function callback() {
        arrayTds.forEach((element, index) => {

            element.setAttribute('id', index + 1); 
            element.addEventListener('click', (target) => {   
    
                let clicked = target.srcElement;
                let printSection = '';         
                let printZone = clicked.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('class'); 
                let seatNumber = clicked.textContent;            
    
                let clickedID = clicked.id;
               
                let id10 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28]; // a litex/levski
                let id7  = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29]; // b litex/levski
                let id5  = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]; // c litex/levski
    
                let id25  = [31, 34, 37, 40, 43]; // a vip
                let id15  = [32, 35, 38, 41, 44]; // b vip
                let id10vip  = [33, 36, 39, 42, 45]; // c vip
    
                if (id10.includes(Number(clickedID))) {
                    money = 10;
                    printSection = 'A';
                }
                if (id7.includes(Number(clickedID))) {
                    money = 7;
                    printSection = 'B';
                }
                if (id5.includes(Number(clickedID))) {
                    money = 5;
                    printSection = 'C';
                }
                if (id25.includes(Number(clickedID))) {
                    money = 25;
                    printSection = 'A';
                }
                if (id15.includes(Number(clickedID))) {
                    money = 15;
                    printSection = 'B';
                }
                if (id10vip.includes(Number(clickedID))) {
                    money = 10;
                    printSection = 'C';
                }       
                if (clicked.getAttribute("class") == 'takenSeat') {
                    textareaString += ` Seat ${target.target.textContent} in zone ${printZone} sector ${printSection} is unavailable. \n`;
                    textarea.value = textareaString;
                    return;
                }    
                
                sumMoney = sumMoney + money; 
                sumFans = sumFans + fans;  
    
                textareaString += ` Seat ${target.target.textContent} in zone ${printZone} sector ${printSection} was taken. \n`;
    
                fans++;
    
                clicked.setAttribute('class', 'takenSeat');
    
                textarea.value = textareaString;
                
           });
        });
    
        summary.addEventListener('click', () => {
            let summary = `${sumMoney} leva ${fans} fans.`;
            document.querySelector("#summary").childNodes[1].textContent = summary;
        });   
    }

    callback();   
    //textarea.value = textareaString; 

}