const add = function(...number) {
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    result += number[i];
  }
  return Number(result);
};

const subtract = function(...number) {
  let result = number[0];
  for (let i = 1; i < number.length; i++) {
    result -= number[i];
  }
  return Number(result);
};

const sum = function(number) {
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    result += number[i];
  }
  return Number(result);
};

const multiply = function(number) {
  let result = 1;
  for (let i = 0; i < number.length; i++) {
    result *= number[i];
  }
  return Number(result);
};

const power = function(...number) {
  let result = number[0];
  
  result **= number[1];
  
  return Number(result);
};

const factorial = function(number) {
  let result = 1;
  for (let i = 0; i < number; i++) {
    result *= (number-i);
  }
	return Number(result);
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
