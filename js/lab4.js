// lab4.js

// Функция для confirm
function exercise1_1() {
    const result = confirm("Нажмите OK или Отмена");
    const message = result ? "Вы нажали OK" : "Вы нажали Отмена";
    alert(`Результат confirm(): ${message}\nВозвращаемое значение: ${result}`);
}

// Функция для prompt с фамилией
function exercise1_2() {
    const surname = prompt("Введите вашу фамилию:", "Иванов");
    if (surname) {
        alert(`Здравствуйте, ${surname}!`);
    } else {
        alert("Вы отменили ввод или оставили поле пустым");
    }
}

// Функция для опроса
function exercise1_3() {
    const name = prompt("Как вас зовут?", "Ваше имя");
    const age = prompt("Сколько вам лет?", "например 10");
    const mood = prompt("Какое у вас настроение?", "Великолепное");

    alert(`Здравствуй, ${name}\nТебе ${age} лет\nИ у тебя ${mood} настроение!`);
}

// Функция для конвертации строк в числа
function exercise1_4() {
    const x = prompt("Введите целое число x:", "10 или свое");
    const y = prompt("Введите дробное число y:", "5.5 или свое");

    if (x === null || y === null) {
        alert("Ввод отменен");
        return;
    }

    const integerX = parseInt(x, 10);
    const floatY = parseFloat(y);

    if (isNaN(integerX) || isNaN(floatY)) {
        alert("Ошибка: введены некорректные числа");
        return;
    }

    const result = integerX + floatY;
    alert(`Введённые значения:\nx = "${x}" (строка)\ny = "${y}" (строка)\n\nПосле конвертации:\nintegerX = parseInt("${x}") = ${integerX}\nfloatY = parseFloat("${y}") = ${floatY}\n\nРезультат сложения: ${integerX} + ${floatY} = ${result}`);
}

// Решение квадратного уравнения
function solveQuadratic() {
    const a = parseFloat(document.getElementById('coefA').value);
    const b = parseFloat(document.getElementById('coefB').value);
    const c = parseFloat(document.getElementById('coefC').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Ошибка: введите корректные коэффициенты");
        return;
    }

    let message = `Уравнение: ${a}x² + ${b}x + ${c} = 0\n\n`;

    if (a === 0) {
        if (b === 0) {
            message += "Уравнение не является квадратным";
        } else {
            const x = -c / b;
            message += `Уравнение линейное: x = ${x.toFixed(2)}`;
        }
    } else {
        const discriminant = b * b - 4 * a * c;
        message += `Дискриминант: D = b² - 4ac = ${discriminant.toFixed(2)}\n\n`;

        if (discriminant > 0) {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            message += `D > 0, два корня:\nx₁ = ${x1.toFixed(2)}\nx₂ = ${x2.toFixed(2)}`;
        } else if (discriminant === 0) {
            const x = -b / (2 * a);
            message += `D = 0, один корень:\nx = ${x.toFixed(2)}`;
        } else {
            const realPart = -b / (2 * a);
            const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
            message += `D < 0, два комплексных корня:\nx₁ = ${realPart.toFixed(2)} + ${imaginaryPart.toFixed(2)}i\nx₂ = ${realPart.toFixed(2)} - ${imaginaryPart.toFixed(2)}i`;
        }
    }

    alert(message);
}

// Генератор случайных чисел
function generateRandomNumbers() {
    const min = parseInt(document.getElementById('randMin').value);
    const max = parseInt(document.getElementById('randMax').value);
    const count = parseInt(document.getElementById('randCount').value);

    if (isNaN(min) || isNaN(max) || isNaN(count) || min >= max || count < 1 || count > 100) {
        alert("Ошибка: проверьте введенные значения\n(минимум < максимум, количество от 1 до 100)");
        return;
    }

    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    alert(`Сгенерированные числа (${count} шт.) от ${min} до ${max}:\n${numbers.join(', ')}`);
}

// Проверка числа на простоту
function checkPrime() {
    const number = parseInt(document.getElementById('primeNumber').value);

    if (isNaN(number) || number < 2) {
        alert("Ошибка: введите целое число больше 1");
        return;
    }

    let isPrime = true;
    let divisors = [];

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            divisors.push(i);
            if (i !== number / i) {
                divisors.push(number / i);
            }
        }
    }

    let message = `Число ${number} `;
    if (isPrime) {
        message += "является простым и этим все сказано.";
    } else {
        divisors.sort((a, b) => a - b);
        message += `является СОСТАВНЫМ.\nДелители тут: ${divisors.join(', ')}.`;
    }

    alert(message);
}

// Заглушка для кнопки "Очистить вывод" (если она осталась в HTML)
function resetOutput() {
    alert("Очистка вывода не требуется, результат показывается в alert.");
}