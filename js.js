function leapYear() {

    class DomObjects{ 

        constructor() {
            Object.seal(this);
        }

        getInput() {
            let input = document.getElementsByTagName('input');
            return input[0].value;
        }

        setInput(arg) {
            let input = document.getElementsByTagName('input');
            return input[0].value = arg;
        }

        getButton() {
            let button = document.getElementsByTagName('button');
            return button;
        }
        
        getH2() {
            let h2 = document.getElementsByTagName('h2');
            return h2;
        }

        getYearDiv() {
            let h2 = document.getElementById('year').childNodes;
            return h2;
        }
    }

    function calculator() {};

    calculator.prototype.calculate = function (input) {        
        return ((input % 4 == 0) && (input % 100 != 0)) || (input % 400 == 0);
    }

    let dos = new DomObjects();
    let result = new calculator();

    let theButton = dos.getButton()[0];

    theButton.addEventListener('click', () => {

        if (result.calculate(dos.getInput()) === true) {
            dos.getH2()[0].textContent = 'Leap Year';
        } else {
            dos.getH2()[0].textContent = 'Not Leap Year';
        }
        
        dos.getYearDiv()[3].textContent = dos.getInput();
        dos.setInput('');
    });

}