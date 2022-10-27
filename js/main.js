//Функция, возвращающая случайное целое число из переданного диапазона включительно.

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
(randomInteger(1, 10));


function checkStringLength(currentStr, maxLength) {
    return (currentStr.length <= maxLength);
}
(checkStringLength('Проверочный текст', 33));
