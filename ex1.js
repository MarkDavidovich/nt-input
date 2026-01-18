let num1 = process.argv[2];
let operand = process.argv[3];
let num2 = process.argv[4];

const calculator = (a, operand, b) => {
  a = +a;
  b = +b;

  if (operand === "/" && b === 0) {
    console.log("Can't divide by zero!");
    return;
  }

  if (operand === "+") {
    console.log(`${a} + ${b} = ${a + b}`);
  } else if (operand === "-") {
    console.log(`${a} - ${b} = ${a - b}`);
  } else if (operand === "*") {
    console.log(`${a} * ${b} = ${a * b}`);
  } else if (operand === "/") {
    console.log(`${a} / ${b} = ${a / b}`);
  } else {
    console.log("Invalid operator! please use +, -, *, or /");
  }
};

calculator(num1, operand, num2);
