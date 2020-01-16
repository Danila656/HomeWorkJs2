const num1 = num2 = 10;

const plus = function () {
    const sum = num1 + num2;
    document.write(`Сумма : ${sum} <br>`);
};

const minus = function () {
    const subtraction = num1 - num2;
    document.write(`Разница : ${subtraction}`);
};

plus();
minus();