//Лаба 2: Сложно описано, но если в кратце, то выгрузка из инета плюс немного табличек 

//Как я создавал таблицы
function createTable1() {
    const tableHtml = `
        <table>
            <tr>
                <td>1 ячейка 1 строки</td>
                <td>2 ячейка 1 строки</td>
            </tr>
            <tr>
                <td>1 ячейка 2 строки</td>
                <td>2 ячейка 2 строки</td>
            </tr>
        </table>
        <p><small>HTML-код: &lt;table&gt;&lt;tr&gt;&lt;td&gt;1 ячейка 1 строки&lt;/td&gt;&lt;td&gt;2 ячейка 1 строки&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;1 ячейка 2 строки&lt;/td&gt;&lt;td&gt;2 ячейка 2 строки&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</small></p>
    `;
    document.getElementById('table1').innerHTML = tableHtml;
}

function createTable2() {
    const tableHtml = `
        <table>
            <tr>
                <th>Заголовока</th>
                <th>Заголовока 2</th>
            </tr>
            <tr>
                <td>1 ячейк 1 строк</td>
                <td>2 ячейк 1 строк</td>
            </tr>
            <tr>
                <td>1 ячейк 2 строк</td>
                <td>2 ячейк 2 строк</td>
            </tr>
        </table>
        <p><small>HTML-код с тегами &lt;th&gt; для заголовков</small></p>
    `;
    document.getElementById('table2').innerHTML = tableHtml;
}

function createTable3() {
    const tableHtml = `
        <table>
            <tr>
                <td colspan="2">Объед яч на 2 колон</td>
            </tr>
            <tr>
                <td>1 яч 2 стр</td>
                <td>2 яч 2 стр</td>
            </tr>
        </table>
        <p><small>HTML-код с атрибутом colspan="2" для объединения ячеек по горизонтали</small></p>
    `;
    document.getElementById('table3').innerHTML = tableHtml;
}

function createTable4() {
    const tableHtml = `
        <table>
            <tr>
                <td width="30%">Шир 30%</td>
                <td width="70%">Шир 70%</td>
            </tr>
            <tr>
                <td height="100">Выс 100px</td>
                <td>Высота обыкновенная</td>
            </tr>
        </table>
        <p><small>HTML-код с атрибутами width и height для управления размерами</small></p>
    `;
    document.getElementById('table4').innerHTML = tableHtml;
}

function createTable5() {
    const tableHtml = `
        <table border="3" cellpadding="10" cellspacing="5">
            <caption>Очень сложная таблица!!!!</caption>
            <tr>
                <td rowspan="2">Объед по верт</td>
                <td>2 яч 1 стр</td>
                <td>3 яч 1 стр</td>
            </tr>
            <tr>
                <td>2 яч 2 стр</td>
                <td>3 яч 2 стр</td>
            </tr>
            <tr>
                <td colspan="3">Объед на 3 колон</td>
            </tr>
        </table>
        <p><small>HTML-код с атрибутами border, cellpadding, cellspacing, а также rowspan и colspan</small></p>
    `;
    document.getElementById('table5').innerHTML = tableHtml;
}

//Как я объединял ячейки таблиц
function createMergeTable1() {
    const tableHtml = `
        <table border="1">
            <tr>
                <td colspan="2">1 и 2 яч вместе :)</td>
                <td>3 яч</td>
                <td>4 яч</td>
            </tr>
            <tr>
                <td>1 яч</td>
                <td>2 яч</td>
                <td>3 яч</td>
                <td>4 яч</td>
            </tr>
            <tr>
                <td>1 яч</td>
                <td>2 яч</td>
                <td>3 яч</td>
                <td>4 яч</td>
            </tr>
        </table>
        <p><small>Объед перв двух яч в перв стр с помощью colspan="2"</small></p>
    `;
    document.getElementById('mergeTable1').innerHTML = tableHtml;
}

function createMergeTable2() {
    const tableHtml = `
        <table border="1">
            <tr>
                <td rowspan="2">1 и 2 яч вместе</td>
                <td>3 яч</td>
                <td>4 яч</td>
            </tr>
            <tr>
                <td>2 яч/td>
                <td>3 яч</td>
            </tr>
            <tr>
                <td>1 яч</td>
                <td>2 яч</td>
                <td>3 яч</td>
            </tr>
        </table>
        <p><small>Объед яч по верт с помощью rowspan="2"</small></p>
    `;
    document.getElementById('mergeTable2').innerHTML = tableHtml;
}

function createMergeTable3() {
    const tableHtml = `
        <table border="1">
            <tr>
                <td rowspan="2">1-е яч двух стр</td>
                <td>2 яч</td>
                <td>3 яч</td>
                <td>4 яч</td>
            </tr>
            <tr>
                <td>2 яч</td>
                <td>3 яч</td>
                <td>4 яч</td>
            </tr>
            <tr>
                <td>1 яч</td>
                <td>2 яч</td>
                <td>3 яч</td>
                <td>4 яч</td>
            </tr>
        </table>
    `;
    document.getElementById('mergeTable3').innerHTML = tableHtml;
}

function createMergeTable4() {
    const tableHtml = `
        <table border="1">
            <tr>
                <td rowspan="3" colspan="2">1-е яч 3х стр (объед 2x3)</td>
                <td>3 яч</td>
            </tr>
            <tr>
                <td>3 яч</td>
            </tr>
            <tr>
                <td>3 яч</td>
            </tr>
            <tr>
                <td colspan="3">4-е яч 3х стр (объед по гориз)</td>
            </tr>
        </table>
        <p><small>Комбин объед с помощью rowspan="3" и colspan="2"</small></p>
    `;
    document.getElementById('mergeTable4').innerHTML = tableHtml;
}

function createMergeTable5() {
    const tableHtml = `
        <table border="1">
            <tr>
                <td>1 яч</td>
                <td rowspan="2" colspan="2">2 и 3-я яч 2x стр</td>
                <td>4 яч</td>
            </tr>
            <tr>
                <td>1 яч</td>
                <td>4 яч</td>
            </tr>
            <tr>
                <td>1 яч</td>
                <td>2 яч</td>
                <td>3 яч</td>
                <td>4 яч</td>
            </tr>
        </table>
    `;
    document.getElementById('mergeTable5').innerHTML = tableHtml;
}

//Как я нумерованные списки делал
function createList1() {
    const listHtml = `
        <ol class="custom alpha">
            <li>Список 1</li>
            <li>Список 2</li>
            <li>косипС 3</li>
            <li>косипС 4</li>
        </ol>
        <p><small>HTML-код: &lt;ol type="A"&gt;...&lt;/ol&gt;</small></p>
    `;
    document.getElementById('list1').innerHTML = listHtml;
}

function createList2() {
    const listHtml = `
        <ol class="custom lalpha">
            <li>Сспкио 1</li>
            <li>Сспкио 2</li>
            <li>Списочек 3</li>
            <li>Списочек 4</li>
        </ol>
        <p><small>HTML-код: &lt;ol type="a"&gt;...&lt;/ol&gt;</small></p>
    `;
    document.getElementById('list2').innerHTML = listHtml;
}

function createList3() {
    const listHtml = `
        <ol class="custom roman">
            <li>Я устал писать одно и тоже 1</li>
            <li>Я устал писать одно и тоже 2</li>
            <li>Я устал писать одно и тоже 3</li>
            <li>Я устал писать одно и тоже 4</li>
        </ol>
        <p><small>HTML-код: &lt;ol type="I"&gt;...&lt;/ol&gt;</small></p>
    `;
    document.getElementById('list3').innerHTML = listHtml;
}

function createList4() {
    const listHtml = `
        <ol class="custom lroman">
            <li>Я устал писать одно и тоже 1</li>
            <li>Я устал писать одно и тоже 2</li>
            <li>Я устал писать одно и тоже 3</li>
            <li>Я устал писать одно и тоже 4</li>
        </ol>
        <p><small>HTML-код: &lt;ol type="i"&gt;...&lt;/ol&gt;</small></p>
    `;
    document.getElementById('list4').innerHTML = listHtml;
}

function createList5() {
    const listHtml = `
        <ol>
            <li>Я устал писать одно и тоже 1</li>
            <li>Я устал писать одно и тоже 2</li>
            <li>Я устал писать одно и тоже 3</li>
            <li>Я устал писать одно и тоже 4</li>
        </ol>
        <p><small>HTML-код: &lt;ol&gt;...&lt;/ol&gt; (стандартная нумерация)</small></p>
    `;
    document.getElementById('list5').innerHTML = listHtml;
}

//Сложный нумерованный список
function createComplexList() {
    const listHtml = `
        <ol>
            <li>1 пункт
                <ol>
                    <li>1 подпункт
                        <ol>
                            <li>1 под-подпункт</li>
                            <li>2 под-подпункт</li>
                        </ol>
                    </li>
                    <li>2 подпункт</li>
                </ol>
            </li>
            <li>2 пункт
                <ul>
                    <li>Маркир 1 подпункт</li>
                    <li>Маркир 2 подпункт</li>
                </ul>
            </li>
            <li>3 пункт
                <ol type="a">
                    <li>Подпункт с букавами цифровизацией</li>
                    <li>Еще один подпункт</li>
                </ol>
            </li>
        </ol>
        <p><small>Сложноуровневомного список с комбинированной нумерацией</small></p>
    `;
    document.getElementById('complexList').innerHTML = listHtml;
}

//А я умею картинки ставить :))
function createImage1() {
    const imageHtml = `
        <h4>Изображение с параметрами:</h4>
        <img src="https://bugaga.ru/uploads/posts/2018-03/1521046391_stokovye-wtf-1.jpg" 
             alt="Картиночка из интернета и я ее отредактировал" 
             width="400" 
             height="200" 
             border="2"
             title="Размер и рамка короче вот">
        <p>Ширина: 400px, Высота: 200px, Рамка: 2px</p>
        <p><small>HTML-код: &lt;img src="..." width="400" height="200" border="2"&gt;</small></p>
    `;
    document.getElementById('image1').innerHTML = imageHtml;
}

function createImage2() {
    const imageHtml = `
        <div style="text-align: left;">
            <img src="https://bugaga.ru/uploads/posts/2018-03/1521046391_stokovye-wtf-1.jpg" 
                 alt="Изображение" 
                 style="float: left; margin-right: 15px; margin-bottom: 10px;">
            <p>Выравниваю текст по левому верхнему углу, чтобы вам не пришлось.
            Выравниваю текст по левому верхнему углу, чтобы вам не пришлось.
            Выравниваю текст по левому верхнему углу, чтобы вам не пришлось.
            Выравниваю текст по левому верхнему углу, чтобы вам не пришлось.</p>
            <p style="clear: both;"><small>HTML-код: &lt;img src="..." style="float: left;"&gt;</small></p>
        </div>
    `;
    document.getElementById('image2').innerHTML = imageHtml;
}

function createImage3() {
    const imageHtml = `
        <div style="text-align: right;">
            <img src="https://bugaga.ru/uploads/posts/2018-03/1521046391_stokovye-wtf-1.jpg" 
                 alt="Изображение" 
                 style="float: right; margin-left: 15px; margin-bottom: 10px;">
            <p>Выравниваю текст по правому верхнему углу, чтобы вам не пришлось.
            Выравниваю текст по правому верхнему углу, чтобы вам не пришлось.
            Выравниваю текст по правому верхнему углу, чтобы вам не пришлось.
            Выравниваю текст по правому верхнему углу, чтобы вам не пришлось.</p>
            <p style="clear: both;"><small>HTML-код: &lt;img src="..." style="float: right;"&gt;</small></p>
        </div>
    `;
    document.getElementById('image3').innerHTML = imageHtml;
}

function createImage4() {
    const imageHtml = `
        <div>
            <p>Текст с изображением, выровненным по базовой линии: 
                <img src="https://bugaga.ru/uploads/posts/2018-03/1521046391_stokovye-wtf-1.jpg" 
                     alt="Изображение" 
                     style="vertical-align: middle;">
                продолжение текста после изображения.
            </p>
            <p><small>HTML-код: &lt;img src="..." style="vertical-align: middle;"&gt;</small></p>
        </div>
    `;
    document.getElementById('image4').innerHTML = imageHtml;
}

function createImage5() {
    const imageHtml = `
        <div>
            <p>Выровнял по нижней линии (мнимой): 
                <img src="https://bugaga.ru/uploads/posts/2018-03/1521046391_stokovye-wtf-1.jpg" 
                     alt="Изображение" 
                     style="vertical-align: bottom;">
            </p>
            <p><small>HTML-код: &lt;img src="..." style="vertical-align: bottom;"&gt;</small></p>
        </div>
    `;
    document.getElementById('image5').innerHTML = imageHtml;
}

//Тихо выкрал и ушел, называется нашел
function createWikiArticle() {
    const wikiHtml = `
        <h2>Сибирь (Усольский район)</h2>
        
        <p><strong>Сибирь</strong> — деревня в <a href="#">Усольском районе</a> <a href="#">Пермского края</a>. Входит в состав <a href="#">Романовского сельского поселения</a>.</p>
        
        <h3>География</h3>
        <p>Деревня расположена в центральной части района, в лесной местности, на левом берегу реки <a href="#">Язьва</a>, примерно в 20 километрах к северо-востоку от города <a href="#">Усолье</a>.</p>
        
        <h3>История</h3>
        <p>Известна с 1782 года. До 2019 года входила в состав <a href="#">Пыскорского сельского поселения</a> Усольского района.</p>
        
        <h3>Население</h3>
        <table>
            <tr>
                <th>Год</th>
                <th>2010</th>
                <th>2013</th>
                <th>2014</th>
            </tr>
            <tr>
                <td>Население</td>
                <td>29</td>
                <td>15</td>
                <td>15</td>
            </tr>
        </table>
        
        <h3>Инфраструктура</h3>
        <ul>
            <li>Личное подсобное хозяйство</li>
            <li>Лесозаготовка</li>
            <li>Рыболовство</li>
        </ul>
        
        <h3>Транспорт</h3>
        <p>Деревня доступна автомобильным транспортом. Ближайшая железнодорожная станция находится в городе Усолье.</p>
        
        <h3>Ссылки</h3>
        <ol>
            <li><a href="#">Официальный сайт Усольского района</a></li>
            <li><a href="#">Карта Усольского района</a></li>
            <li><a href="#">История деревень Усольского района</a></li>
        </ol>
        
        <div style="background-color: #e8f4f8; padding: 10px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Примечание:</strong>Оригинал тута <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%B1%D0%B8%D1%80%D1%8C_(%D0%A3%D1%81%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD)">(***сюда делать тык***)</a>.</p>
        </div>
    `;
    document.getElementById('wikiArticle').innerHTML = wikiHtml;
}