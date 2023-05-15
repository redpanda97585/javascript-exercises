const removeFromArray = function (array, ...restArgs) {
    let givenArray = array;
    let restArguments = restArgs;
    const newArray = [];

    givenArray.forEach((element) => {
        if (!restArguments.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray;
};

const qremoveFromArray = (array, ...restArgs) => {
    return array.filter(element => !restArgs.includes(element))
}


// Do not edit below this line
module.exports = removeFromArray;
