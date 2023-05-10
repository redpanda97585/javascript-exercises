const repeatString = function(str, num) {
    let strVariable = str;
    let repetitions = num;
    if (repetitions === 0) {
        return '';
    } else if (repetitions < 0) {
        return 'ERROR';
    } else {
        for (let i = 1; i < repetitions; i++) {
            strVariable += str
        }
        return strVariable;
    }
};

// Do not edit below this line
module.exports = repeatString;
