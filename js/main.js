//Функция, возвращающая случайное целое число из переданного диапазона включительно.

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

alert(randomInteger(1, 10));

//learn.javascript.ru — здесь инфо нашла.

//Проверка длины строки

let str = prompt('Введите строку');
let maxlegth = +prompt('Укажите максимальную длину строки')
if (str == undefined || str == '') {
    alert('Строка не введена');
} else {
    truncate();
}

function truncate() {
    if (str.length >= maxlegth) {
        return alert(str.slice(0, maxlegth - 1) + '...');
    } else {
        return alert(str);
    }
}
