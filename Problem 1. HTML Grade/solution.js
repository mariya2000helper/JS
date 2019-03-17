function solve(examPoints, homeworkCompleted, totalHomework) {

    let maxPoints = 100;
    let maxExamPoints = 400;
    let totalPoints = ((examPoints / maxExamPoints) * 90) + ((homeworkCompleted / totalHomework) * 10);

    let result = 0;
    if (examPoints === 400) {
        result = 6.00;
        return result.toFixed(2);
    }
    
    result = 3 + 2 * (totalPoints - maxPoints / 5) / (maxPoints / 2);    

    if (result < 3) {
        result = 2.00;        
    }

    if (result > 6) {
        result = 6.00;        
    }

    return result.toFixed(2);
}