
/* Задание: (Рондомные примеры)
            Пользователь вводит колличество решаемых им примеров
            И функции Пользователю отдают рандомные числа и рандомные знаки для решаемых примеров
            После примера отдается сообщение:
                Ваш ответ верный - 2 
                    или
                Ваш ответ не верный - 2! Правильный ответ - 3! */

let count = +prompt('Введите желаемое количество примеров');
function rand(max = 10, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for (let i = 0; i < count; i++) {
    let num1 = rand(9)
    let num2 = rand(9)
    let operation = rand(4, 1)
    let result = 0;

    switch (operation) {
        case 1:
            result = num1 + num2;
            operation = "+"
            break;
        case 2:
            result = num1 - num2;
            operation = "-"
            break;
        case 3:
            result = num1 * num2;
            operation = "*"
            break;
        default:
            result = (num1 / num2).toFixed(1);
            operation = "/"
            break;
    }
    let userResult = +prompt('Решите пример: ' + num1 + operation + num2)
    console.log(userResult == result ? "Молодец ваш ответ правилный " + result : "Ошибка! Ваш ответ: " + userResult + "; Правильный ответ: " + result);
} 