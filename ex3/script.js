const num = prompt('Введите число');

if (num >= 5) {
    for (let i = 3; i <= num; i++) {
        console.log(i);
    }
} else {
    alert('Ошибка ... Слишком маленькое число');
}
