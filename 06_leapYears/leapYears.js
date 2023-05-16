const leapYears = function(givenYear) {
    if (givenYear % 4 === 0) {
        if (givenYear % 100 === 0) {
            if (givenYear % 100 === 0 && givenYear % 400 === 0) {
                return true;
            } else {
                return false;
            };
        } else {
            return true;
        };
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = leapYears;

