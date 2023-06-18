const findTheOldest = function(givenArray) {
    return givenArray.reduce((oldest, currentPerson) => {
        const oldestAge = oldest.getAge(
            oldest.yearOfDeath - oldest.yearOfBirth);
        const currentPersonAge = currentPerson.getAge(
            currentPerson.yearOfDeath - currentPerson.yearOfBirth);
        return oldestAge < currentPersonAge ? currentPerson : oldest;
    });
};

const getAge = function (death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    };
    return death - birth;
};



// Do not edit below this line
module.exports = findTheOldest;
