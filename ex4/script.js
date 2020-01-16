const choice = prompt(`Выберите один из пунктов
 1. Автомобиль
 2. Мотоцикл
 3. Велосипед`);

switch (choice) {
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