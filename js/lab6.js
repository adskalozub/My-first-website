//Обрабатываю строки на жаве

//работа со строками
function runTask1() {
    //формирование строки "123456789"
    let str = '';
    for (let i = 1; i <= 9; i++) str += i;
    const result = `Строка: '${str}'`;
    document.getElementById('result1').innerHTML = `<strong>Результат:</strong>\n${result}`;
}

//регулярные выражения
function runTask2() {
    // Вариант 0 (фиксированный): найти строки по шаблону a.b
    const testStr = 'ahb acb aeb aeeb adcb axeb';
    const matches = testStr.match(/a.b/g);
    const result = `Строка: '${testStr}'\nНайдено: ${matches ? matches.join(', ') : 'ничего'}`;
    document.getElementById('result2').innerHTML = `<strong>Результат:</strong>\n${result}`;
}

//Дополнительные функции

//тестирование строковых операций
function testStringOperations() {
    const input = document.getElementById('testString').value;
    if (!input.trim()) {
        document.getElementById('testResult').textContent = 'тут вводить строку тестирования';
        return;
    }

    const results = [
        `Длина: ${input.length}`,
        `Верхний регистр: ${input.toUpperCase()}`,
        `Нижний регистр: ${input.toLowerCase()}`,
        `Без пробелов: "${input.trim()}"`,
        `Обратный порядок: ${input.split('').reverse().join('')}`
    ];

    document.getElementById('testResult').textContent = `исходная: "${input}"\n\n${results.join('\n')}`;
}

//тестирование регулярных выражений
function testRegex() {
    const pattern = document.getElementById('regexPattern').value;
    const text = document.getElementById('regexText').value;

    if (!pattern || !text) {
        document.getElementById('regexResult').textContent = 'введите частое выражение и текст';
        return;
    }

    try {
        const regex = new RegExp(pattern, 'g');
        const matches = text.match(regex);

        if (matches) {
            document.getElementById('regexResult').innerHTML =
                `Найдено: ${matches.length} совпадений\n` +
                matches.map(m => `• "${m}"`).join('\n');
        } else {
            document.getElementById('regexResult').textContent = 'совпадений 0';
        }
    } catch (e) {
        document.getElementById('regexResult').textContent = `Ошибка: ${e.message}`;
    }
}