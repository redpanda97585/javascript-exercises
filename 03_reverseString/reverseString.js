const reverseString = function(str) {
    let stringToBeReversed = str;
    let newString = "";
    for (let i = stringToBeReversed.length; i > 0; i--) {
        newString += stringToBeReversed[i-1];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
