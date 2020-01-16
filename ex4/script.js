const choise = prompt('Выберите один из пунктов \n 1. Автомобиль \n 2. Мотоцикл \n 3. Велосипед');

switch (choise) {
    case '1':
        alert('Автомобиль');
        break;
    case '2':
        alert('Мотоцикл');
        break;
    case '3':
        alert('Велосипед');
        break;
    default:
        alert('Выбрано неправильное значение');
        break;
}