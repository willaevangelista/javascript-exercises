const reverseString = function(string) {

    let result = '';
    let stringLength = string.length - 1;
    
    for (let i = stringLength; i >= 0 ; i--) {
        result = result + string[i];
    }

    return result;

};

// Do not edit below this line
module.exports = reverseString;
