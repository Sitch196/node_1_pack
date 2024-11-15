console.log("Welcome to Reverse Polish notation Calculator!  Version: 2.1.1");

function evaluateRPN(expression) {
  console.log("Evaluating expression:", expression);

  const stack = [];
  const tokens = expression.split(" ");

  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  tokens.forEach((token) => {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else if (operators[token]) {
      const b = stack.pop();
      const a = stack.pop();

      stack.push(operators[token](a, b));
    } else {
      throw new Error(`Unknown operator: ${token}`);
    }
  });

  return stack.pop();
}

module.exports = function ({ expression }) {
  return evaluateRPN(expression);
};
