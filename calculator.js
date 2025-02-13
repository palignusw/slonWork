const operations = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divde: (num1, num2) => num1 / num2,
};

const calculate = (num1, num2, operation) => operation?.(num1, num2) ?? NaN;

const selectedOperation = "subtract";
console.log(calculate(6, 3, operations[selectedOperation]));
