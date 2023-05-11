const removeFromArray = function(array, ...args) {
    let givenArray = array;
    let restParameters = args;  
    let newArray = givenArray.filter(item => !restParameters.includes(item));
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
