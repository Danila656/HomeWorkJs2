const num1 = Number(prompt('Введите первое число'));
const num2 = Number(prompt('Введите второе число'));

const Multiplication = (num1, num2) => document.write(`Произведение : ${+num1 * +num2}<br>`);

const Sum = (num1, num2) => document.write(`Сумма : ${num1 + num2}<br>`);

const Subtraction = (num1, num2) => document.write(`Разница : ${num1 - num2}<br>`);

const Division = (num1, num2) => document.write(`Частное : ${num1 / num2}`);

Multiplication();
Sum();
Subtraction();
Division();