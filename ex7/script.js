const getNumber = (message) => {
    let number = Number(prompt(message));

    while (isNaN(number)) {
        number = Number(prompt(message));
    }

    return number;
};

const number1 = getNumber('Введите первое число');
const number2 = getNumber('Введите второе число');

const multiplication = (num1, num2) => num1 * num2;
const sum = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;
const division = (num1, num2) => num1 / num2;

multiplication(number1, number2);
sum(number1, number2);
subtraction(number1, number2);
division(number1, number2);
