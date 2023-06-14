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

const factorial = function (n) {
  if (n === 0) return 1;
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
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
