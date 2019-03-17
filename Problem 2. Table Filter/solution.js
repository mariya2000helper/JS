function solve(matrix, command) {     

    let comm = command.split(' ');
 
    if (comm[0] === 'sort') {

        let firstRow = matrix[0];
        let index = firstRow.indexOf(comm[1]);

        console.log(matrix[0].join(' | '));

        matrix = matrix.slice(0);
        matrix.splice(0, 1);
        
        matrix.sort((a, b) => {           

            if (a[index] === b[index]) {
                return 0;
            }
            else {
                return (a[index] < b[index]) ? -1 : 1;
            }            

        });

        for(let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' | '));
        }
        
        
    } else if(comm[0] === 'hide') {
        
        let firstRow = matrix[0];
        let index = firstRow.indexOf(comm[1]);
        
        for(let i = 0; i < matrix.length; i++)
        {
            matrix[i].splice(index, 1);
            console.log(matrix[i].join(' | '));
        }
         
    } else if(comm[0] === 'filter') {

        let firstRow = matrix[0];
        let index = firstRow.indexOf(comm[1]);

        console.log(matrix[0].join(' | '));

        for (let i = 1; i < matrix.length ; i++) {          

            if (matrix[i][index] === comm[2]) {
                console.log(matrix[i].join(' | '));                
            }
        }
        
    }    
   
}

let matrix = [
    ['name', 'age', 'grade'],
    ['Peter', '25', '5.00'],
    ['George', '34', '6.00'],
    ['Marry', '28', '5.49']];
    
let command = 'sort name';

solve(matrix, command);

