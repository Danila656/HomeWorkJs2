const getNumber = (message) => {
    let num = Number(prompt(message));

    while (isNaN(num)) {
        alert('Ошибка... Это не число');
        num = Number(prompt(message));
    }

    return num;
};

const num = getNumber('Введите число');

if (num >= 5) {
    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
} else {
    alert('Ошибка... Слишком маленькое число');
}
