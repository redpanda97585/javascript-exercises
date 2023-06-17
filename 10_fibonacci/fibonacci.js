const fibonacci = function(givenNumber) {
    if (givenNumber < 0) return "OOPS";
    if (givenNumber === 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < givenNumber; i++) {
        const ab = b;
        b = a + b;
        a = ab;
        // console.log(ab);
    };
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
