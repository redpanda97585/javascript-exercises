const sumAll = function(start, end) {
    let total = 0;
    if (start > end) {
        end = start;
        start = 1;
    } else if (start < 0) {
        return 'ERROR';
    } else if (typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR';
    };
    for (let i = start; i < end+1; i++) {
        total += i;
    };
    return total;
};

// Do not edit below this line
module.exports = sumAll;


// in the test03 i need to change
// the second and third parameters in the loop