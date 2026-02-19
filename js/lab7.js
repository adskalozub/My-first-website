//работа с объектами и событиями

//объекты
function runExercise1Task() {
    const obj = {
        'Минск': 'Беларусь',
        'Москва': 'Россия',
        'Киев': 'Украина',
        'Варшава': 'Польша',
        'Берлин': 'Германия'
    };

    let result = "=== Результат ===\n\n";
    result += "Города и страны:\n";
    for (let city in obj) {
        result += `${city} – ${obj[city]}\n`;
    }

    document.getElementById('result1').textContent = result;
}

//обработка событий

//простое взаимодействие
function runExercise2Task1() {
    const resultDiv = document.getElementById('result2_1');
    const controls = document.getElementById('controls2_1');

    //очищает содержимое и создаёт простую кнопку
    controls.innerHTML = `
        <button id="simpleButton" style="padding: 10px 20px;">Нажми меня</button>
    `;

    const button = document.getElementById('simpleButton');
    button.onclick = function() {
        resultDiv.textContent = 'Вы смогли это! кнопка работает.';
        this.style.backgroundColor = '#ffd700';
    };

    resultDiv.textContent = 'Кнопка создана, а теперь нажми на нее как можно точнее.';
}

//ещё одно взаимодействие
function runExercise2Task2() {
    const resultDiv = document.getElementById('result2_2');
    const controls = document.getElementById('controls2_2');

    controls.innerHTML = `
        <input type="text" id="textField" placeholder="аведите текст">
        <button id="showTextButton">показать текст</button>
    `;

    const button = document.getElementById('showTextButton');
    const field = document.getElementById('textField');

    button.onclick = function() {
        const text = field.value.trim() || 'ничего не введено';
        resultDiv.textContent = `Вы ввели: "${text}"`;
    };

    resultDiv.textContent = 'введите текст в поле и нажмите кнопку.';
}

//Доп тестовые функции

function testObjectOperations() {
    const person = {
        name: "Александр",
        age: 19,
        city: "Москва",
        skills: ["JS", "HTML", "CSS"]
    };

    let result = "=== Тест объектов ===\n\n";
    result += "Объект person:\n";
    for (let key in person) {
        result += `  ${key}: ${Array.isArray(person[key]) ? person[key].join(', ') : person[key]}\n`;
    }

    document.getElementById('testObjectResult').textContent = result;
}

function testMouseOver() {
    const btn = document.getElementById('testEventButton');
    btn.style.backgroundColor = '#ffffcc';
    btn.textContent = 'Убери мышь';
}

function testMouseOut() {
    const btn = document.getElementById('testEventButton');
    btn.style.backgroundColor = '';
    btn.textContent = 'Наведи мышь';
}

function testAlert() {
    alert('Внимание! Спасибо за внимание!');
}

function changeBackgroundColor() {
    const colors = ['#f0f8ff', '#f8f0ff', '#fff8f0', '#f0fff8', '#fff0f8'];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = newColor;

    const demo = document.getElementById('demoArea');
    demo.innerHTML = `<p>Цвет фона изменён на <strong>${newColor}</strong></p>`;
}

function changeTextStyle() {
    const demo = document.getElementById('demoArea');
    const styles = [
        { color: 'red', fontSize: '18px', fontWeight: 'bold' },
        { color: 'blue', fontSize: '16px', fontStyle: 'italic' },
        { color: 'green', fontSize: '20px', textDecoration: 'underline' }
    ];
    const random = styles[Math.floor(Math.random() * styles.length)];
    Object.assign(demo.style, random);
    demo.innerHTML = `<p>Стиль текста изменён</p>`;
}

function addNewElement() {
    const demo = document.getElementById('demoArea');
    const newEl = document.createElement('div');
    newEl.textContent = `Новый элемент #${demo.children.length + 1}`;
    newEl.style.padding = '5px';
    newEl.style.margin = '5px 0';
    newEl.style.backgroundColor = '#e6ffe6';
    newEl.style.border = '1px solid #66cc66';
    demo.appendChild(newEl);
}

function removeLastElement() {
    const demo = document.getElementById('demoArea');
    if (demo.lastChild && demo.lastChild.nodeType === 1) {
        demo.removeChild(demo.lastChild);
    }
}