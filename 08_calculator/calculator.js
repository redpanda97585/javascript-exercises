const add = function (...givenNumbers) {
  const numbers = Array.from(givenNumbers);
  const result = numbers.reduce((total, number) => total + number, 0);
  return result;
};

const subtract = function (...givenNumbers) {
  const numbers = Array.from(givenNumbers);
  const result = numbers.reduce((total, number) => total - number, 0);
  return result;
};

const sum = function (...givenNumbers) {
  const numbers = Array.from(givenNumbers);
  const result = numbers.reduce((total, number) => total + number, 0);
  return result;
};

const multiply = function (...givenNumbers) {
  const numbers = Array.from(givenNumbers);
  const result = numbers.reduce((total, number) => total * number, 0);
  return result;
};

const power = function (...givenNumbers) {
  const numbers = Array.from(givenNumbers);
  const result = numbers.reduce((total, number) => total ** number, 0);
  return result;
};

const factorial = function (givenNumber) {
  const number = givenNumber;
  let result = 0;
  for (let i = number; i <= 0; i--) {
    result += i
  };
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
