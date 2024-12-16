console.log("thnathip");
console.log("pond");


function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        default:
            return 'Invalid operator';
    }
}


const num1 = 10;
const num2 = 5;
const operator = '+';

console.log(`Result: ${calculate(num1, num2, operator)}`);
