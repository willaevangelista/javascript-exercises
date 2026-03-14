const sumAll = function(num1, num2) {

    if ((num1 < 0) ||
        (num2 < 0) ||
        (Number.isInteger(num1) === false) ||
        (Number.isInteger(num2) === false)) {

        return 'ERROR';
    } 

    let bigger = num1 > num2 ? num1 : num2;
    let smaller = num1 > num2 ? num2 : num1;

    let result = 0;

    for (let i = smaller; i <= bigger; i++) {
        result += i;
    }
   

    return result;
    
};

// Do not edit below this line
module.exports = sumAll;
