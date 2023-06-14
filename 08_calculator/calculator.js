const add = function (...givenNumbers) {
  const numbers = Array.from(givenNumbers);
  const result = numbers.reduce((total, number) => total + number, 0);
  return result;
};

const subtract = function (...givenNumbers) {
  const numbers = Array.from(givenNumbers);
  let result = -1;
  for (const number of numbers) {
    if (result === -1) {
      result = number;
    } else {
      result -= number;
    };
  };
  return result;
};

const sum = function (givenNumbers) {
  const numbers = givenNumbers;
  const result = numbers.reduce((total, number) => total + number, 0);
  return result;
};

const multiply = function (givenNumbers) {
  const numbers = givenNumbers;
  let result = -1;
  for (const number of numbers) {
    if (result === -1) {
      result = number;
    } else {
      result *= number;
    };
  };
  return result;
};

const power = function (...givenNumbers) {
  const numbers = Array.from(givenNumbers);
  let result = -1;
  for (const number of numbers) {
    if (result === -1) {
      result = number;
    } else {
      result **= number;
    };
  };
  return result;
};

const factorial = function (givenNumber) {
  const number = givenNumber;
  let result = 0;
  for (let n = number; n >= 0; n--) {
    result = number * (number - n);
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
