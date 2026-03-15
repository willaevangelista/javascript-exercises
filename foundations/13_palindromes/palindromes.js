const palindromes = function (string) {

    let originalString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    let stringSplit = originalString.split("");

    let reverseString = ((stringSplit.reverse()).join("")).toLowerCase();

    return originalString === reverseString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
