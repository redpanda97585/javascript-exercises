const palindromes = function (givenWord) {
    const original = Array.from(givenWord);
    const reversed = Array.from(givenWord).reverse();

    original.forEach(e => {
        const index = original.indexOf(e);
        original[index] = original[index].toLowerCase();
        if (e === " " || e === '!' || e === '.' || e === ',') {
            const index = original.indexOf(e);
            original.splice(index,1);
        };
    });
    reversed.forEach(e => {
        const index = reversed.indexOf(e);
        reversed[index] = reversed[index].toLowerCase();
        if (e === " " || e === ','|| e === '!' || e === '.') {
            const index = reversed.indexOf(e);
            reversed.splice(index,1);
        };
    });

    if (JSON.stringify(original) === JSON.stringify(reversed)) {
        return true;
    } else {
        return false;
    };
    // indexOf()
    // splice(index, 1)
};

// Do not edit below this line
module.exports = palindromes;
