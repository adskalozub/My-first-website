// Лабораторная работа 1
function runExample1_1() {
    const output = document.getElementById('output1_1');
    let html = '';
    
    // Базовый размер шрифта
    html += '<h4>Базовый размер шрифта:</h4>';
    html += '<font size="2">базовый размер шрифта равен 2</font><br>';
    html += '<font size="3">базовый размер шрифта равен 3</font><br>';
    html += '<font size="4">базовый размер шрифта равен 4</font><br><br>';
    
    // Выравнивание текста
    html += '<h4>Выравнивание текста:</h4>';
    html += '<div style="text-align: left;">Выровнено по левому краю</div>';
    html += '<div style="text-align: center;">Выровнено по центру</div>';
    html += '<div style="text-align: right;">Выровнено по правому краю</div>';
    
    output.innerHTML = html;
}

function runExample1_2() {
    const output = document.getElementById('output1_2');
    let html = '';
    
    html += '<h1 style="font-size: 32px">Пример 6 (32px)</h1>';
    html += '<h2 style="font-size: 24pt">Пример 5 (24pt)</h2>';
    html += '<h3 style="font-size: 1.5em">Пример 4 (1.5em)</h3>';
    html += '<h4 style="font-size: 150%">Пример 3 (150%)</h4>';
    html += '<h5 style="font-size: 20px">Пример 2 (20px)</h5>';
    html += '<h6 style="font-size: small">Пример 1 (small)</h6>';
    
    output.innerHTML = html;
}

function runExample1_3() {
    const output = document.getElementById('output1_3');
    let html = '';
    
    const fonts = [
        { name: 'Verdana', text: 'Текст, написанный шрифтом Verdana' },
        { name: 'Times New Roman', text: 'Текст, написанный шрифтом Times New Roman' },
        { name: 'Arial Unicode MS', text: 'Текст, написанный шрифтом Arial Unicode MS' },
        { name: 'Calibri', text: 'Текст, написанный шрифтом Calibri' }
    ];
    
    fonts.forEach(font => {
        html += `<div class="font-example" style="font-family: '${font.name}'">${font.text}</div>`;
    });
    
    output.innerHTML = html;
}

function runExample1_4() {
    const output = document.getElementById('output1_4');
    let html = '';
    
    const colors = [
        { name: 'красный', value: 'red', hex: '#FF0000' },
        { name: 'оранжевый', value: 'orange', hex: '#FFA500' },
        { name: 'зеленый', value: 'green', hex: '#008000' },
        { name: 'синий', value: 'blue', hex: '#0000FF' }
    ];
    
    html += '<h4>Цвет через название:</h4>';
    colors.forEach(color => {
        html += `<div style="color: ${color.value}; padding: 5px;">цвет текста документа ${color.name}</div>`;
    });
    
    html += '<h4>Цвет через HEX:</h4>';
    colors.forEach(color => {
        html += `<div style="color: ${color.hex}; padding: 5px;">цвет текста документа ${color.name} (${color.hex})</div>`;
    });
    
    output.innerHTML = html;
}

function runExample2_1() {
    const output = document.getElementById('output2_1');
    let html = `
        <h4>Пример 1-8: Различные теги выделения текста</h4>
        <div style="margin: 10px 0;">
            <b>Пример 1: Этот текст выделен жирным (тег &lt;b&gt;)</b><br>
            <i>Пример 2: Этот текст выделен курсивом (тег &lt;i&gt;)</i><br>
            <u>Пример 3: Этот текст подчеркнут (тег &lt;u&gt;)</u><br>
            <mark>Пример 4: Этот текст выделен цветом (тег &lt;mark&gt;)</mark><br>
            <small>Пример 5: Этот текст уменьшен (тег &lt;small&gt;)</small><br>
            <big>Пример 6: Этот текст увеличен (тег &lt;big&gt;)</big><br>
            <tt>Пример 7: Этот текст моноширинный (тег &lt;tt&gt;)</tt><br>
            <sup>Пример 8: Верхний индекс</sup> и <sub>нижний индекс</sub>
        </div>
    `;
    
    output.innerHTML = html;
}

function runExample3_1() {
    const output = document.getElementById('output3_1');
    let html = `
        <h4>Пример 1-4: Форматирование текста</h4>
        <div style="margin: 10px 0;">
            <p><strong>Пример 1:</strong> Новый абзац с помощью &lt;p&gt;</p>
            <p>Этот тег используется для переходов на новую строку<br>без образования абзацев (тег &lt;br&gt;)</p>
            <p><strong>Пример 3:</strong> <nobr>Этот тег запрещает перевод строки. Текст отображается в одну строку.</nobr></p>
            <blockquote style="margin-left: 30px; padding-left: 10px; border-left: 3px solid #ccc;">
                <strong>Пример 4:</strong> Оформляет находящийся между начальным и конечным тэгами текст как цитату. 
                Используется для длинных цитат. Цитируемый текст отображается отдельным абзацем с увеличенным отступом.
            </blockquote>
        </div>
    `;
    
    output.innerHTML = html;
}

function runExample4_1() {
    const output = document.getElementById('output4_1');
    let html = `
        <h4>Заголовки всех уровней:</h4>
        <h1>Заголовок первого уровня</h1>
        <h2>Заголовок второго уровня</h2>
        <h3>Заголовок третьего уровня</h3>
        <h4>Заголовок четвертого уровня</h4>
        <h5>Заголовок пятого уровня</h5>
        <h6>Заголовок шестого уровня</h6>
    `;
    
    output.innerHTML = html;
}