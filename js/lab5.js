//Работа с функциями и массивами

//глобальные переменные
let currentMatrix = [];
let sortingAnimation = null;
let searchAnimation = null;

//заполнение массива числами
function runExercise1_1() {
    const consoleElement = document.getElementById('console1');
    let output = consoleElement.textContent + '\n\n=== заполнение массива числами ===\n';

    const n = 5; //фиксированный размер

    function fillArrayWithNumbers(n) {
        const arr = [];
        for (let i = 1; i <= n; i++) {
            arr.push(i.toString().repeat(i));
        }
        return arr;
    }

    const result = fillArrayWithNumbers(n);

    output += `Размер массива: ${n}\n`;
    output += `Результат: [${result.join(', ')}]\n`;
    output += `Длина массива: ${result.length}\n`;

    //визуализация
    output += '\nвизуализация массива:\n';
    for (let i = 0; i < result.length; i++) {
        output += `arr[${i}] = "${result[i]}"\n`;
    }

    consoleElement.textContent = output;
    consoleElement.classList.add('highlight');
    setTimeout(() => consoleElement.classList.remove('highlight'), 1000);
}

function showCode1_1() {
    const code = document.getElementById('code1_1');
    code.style.display = code.style.display === 'none' ? 'block' : 'none';
}

//заполнение массива символами
function runExercise1_2() {
    const consoleElement = document.getElementById('console1');
    let output = consoleElement.textContent + '\n\n=== заполнение массива символами ===\n';

    const n = 6;          //фиксированный размер
    const char = 'x';      //фиксированный символ

    function fillArrayWithChars(char, n) {
        const arr = [];
        for (let i = 1; i <= n; i++) {
            arr.push(char.repeat(i));
        }
        return arr;
    }

    const result = fillArrayWithChars(char, n);

    output += `Символ: "${char}", Размер массива: ${n}\n`;
    output += `Результат: [${result.join(', ')}]\n`;

    output += '\nвизуализация массива:\n';
    for (let i = 0; i < result.length; i++) {
        const visual = result[i].replace(/./g, '■');
        output += `arr[${i}] = "${result[i]}" ${visual}\n`;
    }

    consoleElement.textContent = output;
    consoleElement.classList.add('highlight');
    setTimeout(() => consoleElement.classList.remove('highlight'), 1000);
}

function showCode1_2() {
    const code = document.getElementById('code1_2');
    code.style.display = code.style.display === 'none' ? 'block' : 'none';
}

//сумма элементов массива
function runExercise1_3() {
    const consoleElement = document.getElementById('console1');
    const arrayInput = document.getElementById('arrayInput1').value;

    let output = consoleElement.textContent + '\n\n=== Сумма элементов массива ===\n';

    const arr = arrayInput.split(',').map(item => parseFloat(item.trim())).filter(item => !isNaN(item));

    if (arr.length === 0) {
        output += 'введен некоректный массив чисел\n';
        consoleElement.textContent = output;
        return;
    }

    function countElementsToSumMoreThan10(arr) {
        let sum = 0;
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            count++;
            if (sum > 10) {
                return { count, sum, index: i };
            }
        }
        return { count: arr.length, sum, index: -1, message: "cумма всех элементов <= 10" };
    }

    const result = countElementsToSumMoreThan10(arr);

    output += `Исходный массив: [${arr.join(', ')}]\n`;
    output += `Длина массива: ${arr.length}\n\n`;

    if (result.index !== -1) {
        output += `Нужно сложить ${result.count} элементов\n`;
        output += `Сумма первых ${result.count} элементов: ${result.sum}\n`;
        output += `Индекс последнего сложенного элемента: ${result.index}\n`;

        output += '\nсложенные элементы:\n';
        let sum = 0;
        for (let i = 0; i <= result.index; i++) {
            sum += arr[i];
            output += `  arr[${i}] = ${arr[i]} (сумма на этом шаге: ${sum})\n`;
        }
    } else {
        output += result.message + '\n';
        output += `сумма всех элементов: ${result.sum}\n`;
    }

    consoleElement.textContent = output;
    consoleElement.classList.add('highlight');
    setTimeout(() => consoleElement.classList.remove('highlight'), 1000);
}

function showCode1_3() {
    const code = document.getElementById('code1_3');
    code.style.display = code.style.display === 'none' ? 'block' : 'none';
}

// Задание 4 – проверка одинаковых чисел подряд
function runExercise1_4() {
    const consoleElement = document.getElementById('console1');
    const arrayInput = document.getElementById('arrayInput2').value;

    let output = consoleElement.textContent + '\n\n=== проверка одинаковых чисел подряд ===\n';

    const arr = arrayInput.split(',').map(item => parseFloat(item.trim())).filter(item => !isNaN(item));

    if (arr.length === 0) {
        output += 'введен некоректный массив чисел\n';
        consoleElement.textContent = output;
        return;
    }

    function hasConsecutiveDuplicates(arr) {
        const duplicates = [];
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                duplicates.push({ index: i, value: arr[i], pair: [i, i + 1] });
            }
        }
        return duplicates;
    }

    const duplicates = hasConsecutiveDuplicates(arr);

    output += `Исходный массив: [${arr.join(', ')}]\n`;
    output += `Длина массива: ${arr.length}\n\n`;

    if (duplicates.length > 0) {
        output += 'найдены одинаковые числа подряд\n\n';
        output += `Найдено ${duplicates.length} пар:\n`;
        duplicates.forEach((dup, idx) => {
            output += `  ${idx + 1}. arr[${dup.pair[0]}] = ${dup.value} и arr[${dup.pair[1]}] = ${arr[dup.pair[1]]}\n`;
        });

        output += '\nвизуализация (* - дубликаты):\n[';
        for (let i = 0; i < arr.length; i++) {
            const isDuplicate = duplicates.some(dup => dup.pair.includes(i));
            output += isDuplicate ? `*${arr[i]}*` : arr[i];
            if (i < arr.length - 1) output += ', ';
        }
        output += ']\n';
    } else {
        output += 'одинаковых чисел подряд нет\n';
    }

    consoleElement.textContent = output;
    consoleElement.classList.add('highlight');
    setTimeout(() => consoleElement.classList.remove('highlight'), 1000);
}

function showCode1_4() {
    const code = document.getElementById('code1_4');
    code.style.display = code.style.display === 'none' ? 'block' : 'none';
}

//пользовательские функции

//поиск следующего простого числа
function runExercise2_1() {
    const consoleElement = document.getElementById('console2');
    const primeInput = parseInt(document.getElementById('primeInput').value);

    let output = consoleElement.textContent + '\n\n=== поиск следующего простого числа ===\n';

    if (isNaN(primeInput) || primeInput < 2) {
        output += 'Нужно число больше 1\n';
        consoleElement.textContent = output;
        return;
    }

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    function findNextPrime(num) {
        if (!isPrime(num)) {
            return { success: false, message: "вводное число не простое", input: num };
        }
        let next = num + 1;
        let steps = 0;
        const maxSteps = 1000;
        while (!isPrime(next) && steps < maxSteps) {
            next++;
            steps++;
        }
        if (steps >= maxSteps) {
            return { success: false, message: "Простое число не найдено", input: num };
        }
        return { success: true, input: num, nextPrime: next, steps: steps };
    }

    const result = findNextPrime(primeInput);
    output += `Входное число: ${primeInput}\n`;

    if (result.success) {
        output += `следующее простое число после ${primeInput} – это ${result.nextPrime}\n`;
        output += `потребовалось проверок: ${result.steps}\n`;

        output += '\nпервые 10 проверенных чисел после входного:\n';
        for (let i = 1; i <= 10 && i <= result.steps; i++) {
            const num = primeInput + i;
            output += `  ${num} – ${isPrime(num) ? 'простое' : 'составное'}\n`;
        }
    } else {
        output += `ошибка: ${result.message}\n`;
    }

    consoleElement.textContent = output;
    consoleElement.classList.add('highlight');
    setTimeout(() => consoleElement.classList.remove('highlight'), 1000);
}

function showCode2_1() {
    const code = document.getElementById('code2_1');
    code.style.display = code.style.display === 'none' ? 'block' : 'none';
}

// Задание 2 – НОК чисел от 1 до n
function runExercise2_2() {
    const consoleElement = document.getElementById('console2');
    const nokInput = parseInt(document.getElementById('nokInput').value);

    let output = consoleElement.textContent + '\n\n=== НОК чисел от 1 до n ===\n';

    if (isNaN(nokInput) || nokInput < 1 || nokInput > 20) {
        output += 'Введено число не в промежутке от 1 до 20\n';
        consoleElement.textContent = output;
        return;
    }

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    function lcmOfRange(n) {
        let result = 1;
        const steps = [];
        for (let i = 2; i <= n; i++) {
            const oldResult = result;
            result = lcm(result, i);
            steps.push({ i, oldResult, newResult: result, gcd: gcd(oldResult, i) });
        }
        return { result, steps };
    }

    const result = lcmOfRange(nokInput);

    output += `n = ${nokInput}\n`;
    output += `НОК чисел от 1 до ${nokInput} = ${result.result}\n\n`;
    output += 'ВЫчисление проходило:\n';
    output += 'lcm(1, 2) = 2\n';
    result.steps.forEach((step, index) => {
        if (index > 0) {
            output += `lcm(${step.oldResult}, ${step.i}) = ${step.newResult}\n`;
        }
    });

    // Факторизация
    function factorize(num) {
        let n = num;
        const factors = [];
        for (let i = 2; i <= Math.sqrt(n); i++) {
            while (n % i === 0) {
                factors.push(i);
                n /= i;
            }
        }
        if (n > 1) factors.push(n);
        const groups = {};
        factors.forEach(f => groups[f] = (groups[f] || 0) + 1);
        return Object.entries(groups).map(([f, c]) => c > 1 ? `${f}^${c}` : f).join(' × ');
    }

    output += `\nфакторизация НОК: ${factorize(result.result)}\n`;

    consoleElement.textContent = output;
    consoleElement.classList.add('highlight');
    setTimeout(() => consoleElement.classList.remove('highlight'), 1000);
}

function showCode2_2() {
    const code = document.getElementById('code2_2');
    code.style.display = code.style.display === 'none' ? 'block' : 'none';
}

//Очистка консолей
function clearConsole1() {
    document.getElementById('console1').textContent = 'Консоль очищена.\n';
}

function clearConsole2() {
    document.getElementById('console2').textContent = 'Консоль очищена.\n';
}

//DLS

//cортировка 
function visualizeSorting() {
    const arrayInput = document.getElementById('sortArrayInput').value;
    const algorithm = document.getElementById('sortAlgorithm').value;
    const arr = arrayInput.split(',').map(item => parseFloat(item.trim())).filter(item => !isNaN(item));
    if (arr.length === 0 || arr.length > 15) {
        alert('Массив должен состоять не более чем 15 элементов');
        return;
    }
    if (sortingAnimation) clearInterval(sortingAnimation);
    const visualization = document.getElementById('sortingVisualization');
    visualization.innerHTML = '';
    arr.forEach((value, index) => {
        const item = document.createElement('div');
        item.className = 'sort-item';
        item.textContent = value;
        item.id = `sort-item-${index}`;
        visualization.appendChild(item);
    });
    startSortingAnimation(arr, algorithm);
}

function startSortingAnimation(arr, algorithm) {
    const consoleElement = document.getElementById('sortingConsole');
    consoleElement.textContent = `начало сортировки алгоритмом: ${algorithm}\nисходный массив: [${arr.join(', ')}]\n\n`;
    let step = 0;
    let sortedArray = [...arr];

    function sortingStep() {
        step++;
        switch (algorithm) {
            case 'bubble': bubbleSortStep(sortedArray, step); break;
            case 'selection': selectionSortStep(sortedArray, step); break;
            case 'insertion': insertionSortStep(sortedArray, step); break;
            case 'quick': quickSortStep(sortedArray, step); break;
        }
        updateSortingVisualization(sortedArray, step, algorithm);
        if (isSorted(sortedArray)) {
            consoleElement.textContent += `\nпо итогу сортировки имеем: [${sortedArray.join(', ')}]\n`;
            clearInterval(sortingAnimation);
            sortingAnimation = null;
        }
    }
    sortingAnimation = setInterval(sortingStep, 1000);
}

function bubbleSortStep(arr, step) {
    const consoleElement = document.getElementById('sortingConsole');
    for (let i = 0; i < arr.length - step; i++) {
        highlightSortItems([i, i + 1]);
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            consoleElement.textContent += `Шаг ${step}: поменяли местами arr[${i}] и arr[${i + 1}]\n`;
        }
        setTimeout(() => removeHighlightSortItems([i, i + 1]), 500);
        return;
    }
}

function selectionSortStep(arr, step) {
    const consoleElement = document.getElementById('sortingConsole');
    if (step <= arr.length) {
        let minIndex = step - 1;
        for (let i = step; i < arr.length; i++) {
            if (arr[i] < arr[minIndex]) minIndex = i;
        }
        if (minIndex !== step - 1) {
            [arr[step - 1], arr[minIndex]] = [arr[minIndex], arr[step - 1]];
            consoleElement.textContent += `Шаг ${step}: переместили ${arr[step - 1]} на позицию ${step - 1}\n`;
        }
        highlightSortItems([step - 1]);
        setTimeout(() => removeHighlightSortItems([step - 1]), 500);
    }
}

function insertionSortStep(arr, step) {
    const consoleElement = document.getElementById('sortingConsole');
    if (step < arr.length) {
        const key = arr[step];
        let j = step - 1;
        highlightSortItems([step]);
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
        consoleElement.textContent += `Шаг ${step}: аставили ${key} на позицию ${j + 1}\n`;
        setTimeout(() => removeHighlightSortItems([step]), 500);
    }
}

function quickSortStep(arr, step) {
    //упрощ демонстрация
    const consoleElement = document.getElementById('sortingConsole');
    if (step === 1) consoleElement.textContent += "выбор опорного элемента\n";
}

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) return false;
    }
    return true;
}

function highlightSortItems(indices) {
    indices.forEach(index => {
        const item = document.getElementById(`sort-item-${index}`);
        if (item) item.classList.add('comparing');
    });
}

function removeHighlightSortItems(indices) {
    indices.forEach(index => {
        const item = document.getElementById(`sort-item-${index}`);
        if (item) item.classList.remove('comparing');
    });
}

function updateSortingVisualization(arr, step, algorithm) {
    const visualization = document.getElementById('sortingVisualization');
    visualization.innerHTML = '';
    arr.forEach((value, index) => {
        const item = document.createElement('div');
        item.className = 'sort-item';
        if (index < step && algorithm === 'bubble') item.classList.add('sorted');
        item.textContent = value;
        item.id = `sort-item-${index}`;
        visualization.appendChild(item);
    });
}

function runSorting() {
    const arrayInput = document.getElementById('sortArrayInput').value;
    const arr = arrayInput.split(',').map(item => parseFloat(item.trim())).filter(item => !isNaN(item));
    if (arr.length === 0) return alert('должен быть конкретный массив чисел');
    function quickSort(arr) {
        if (arr.length <= 1) return arr;
        const pivot = arr[Math.floor(arr.length / 2)];
        const left = [], right = [], equal = [];
        for (let e of arr) {
            if (e < pivot) left.push(e);
            else if (e > pivot) right.push(e);
            else equal.push(e);
        }
        return [...quickSort(left), ...equal, ...quickSort(right)];
    }
    const sorted = quickSort(arr);
    document.getElementById('sortingConsole').textContent = `быстрая сортировка:\nисходный: [${arr.join(', ')}]\nотсортированный: [${sorted.join(', ')}]\n`;
    document.getElementById('sortArrayInput').value = sorted.join(',');
}

function showSortingCode() {
    alert('Код сортировок см. в комментариях внутри функции.');
}

// --- Поиск ---
function visualizeSearch() {
    const arrayInput = document.getElementById('searchArrayInput').value;
    const searchValue = parseFloat(document.getElementById('searchValue').value);
    const algorithm = document.getElementById('searchAlgorithm').value;
    const arr = arrayInput.split(',').map(item => parseFloat(item.trim())).filter(item => !isNaN(item));
    if (arr.length === 0 || isNaN(searchValue)) {
        alert('должно быть число и конкретный массив для поиска');
        return;
    }
    if (searchAnimation) clearInterval(searchAnimation);
    const visualization = document.getElementById('searchVisualization');
    visualization.innerHTML = '';
    arr.forEach((value, index) => {
        const item = document.createElement('div');
        item.className = 'array-item';
        item.textContent = value;
        item.id = `search-item-${index}`;
        visualization.appendChild(item);
    });
    startSearchAnimation(arr, searchValue, algorithm);
}

function startSearchAnimation(arr, value, algorithm) {
    const consoleElement = document.getElementById('searchConsole');
    consoleElement.textContent = `аоиск алгоритмом: ${algorithm}\nищем: ${value}\nмассив: [${arr.join(', ')}]\n\n`;
    let step = 0;
    let foundIndex = -1;

    function searchStep() {
        step++;
        if (algorithm === 'linear') foundIndex = linearSearchStep(arr, value, step);
        else if (algorithm === 'binary') foundIndex = binarySearchStep(arr, value, step);

        if (foundIndex !== -1 || step >= arr.length) {
            if (foundIndex !== -1) {
                consoleElement.textContent += `\nэлемент ${value} найден на позиции ${foundIndex}!\n`;
                highlightFoundElement(foundIndex);
            } else {
                consoleElement.textContent += `\nэлемент ${value} не найден.\n`;
            }
            clearInterval(searchAnimation);
            searchAnimation = null;
        }
    }
    searchAnimation = setInterval(searchStep, 1000);
}

function linearSearchStep(arr, value, step) {
    const index = step - 1;
    if (index >= arr.length) return -1;
    highlightSearchItem(index);
    document.getElementById('searchConsole').textContent += `шаг ${step}: проверяем arr[${index}] = ${arr[index]}\n`;
    if (arr[index] === value) return index;
    setTimeout(() => removeHighlightSearchItem(index), 500);
    return -1;
}

function binarySearchStep(arr, value, step) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    let left = 0, right = sortedArr.length - 1;
    for (let i = 0; i < step; i++) {
        if (left > right) return -1;
        const mid = Math.floor((left + right) / 2);
        highlightSearchItem(mid);
        document.getElementById('searchConsole').textContent += `шаг ${step}: проверяем arr[${mid}] = ${sortedArr[mid]}\n`;
        if (sortedArr[mid] === value) return mid;
        if (sortedArr[mid] < value) left = mid + 1;
        else right = mid - 1;
        setTimeout(() => removeHighlightSearchItem(mid), 500);
    }
    return -1;
}

function highlightSearchItem(index) {
    const item = document.getElementById(`search-item-${index}`);
    if (item) item.classList.add('highlighted');
}

function removeHighlightSearchItem(index) {
    const item = document.getElementById(`search-item-${index}`);
    if (item) item.classList.remove('highlighted');
}

function highlightFoundElement(index) {
    const item = document.getElementById(`search-item-${index}`);
    if (item) {
        item.style.background = '#2ecc71';
        item.style.color = 'white';
        item.style.transform = 'scale(1.2)';
    }
}

function showSearchCode() {
    alert('Код поиска см. в комментариях внутри функции (я хитрый, поэтому искать в js).');
}

// --- Матрицы ---
function createMatrix() {
    const rows = parseInt(document.getElementById('matrixRows').value);
    const cols = parseInt(document.getElementById('matrixCols').value);
    const consoleElement = document.getElementById('matrixConsole');
    if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1 || rows > 10 || cols > 10) {
        alert('Должен быть массив в промежутке от 1 до 10');
        return;
    }
    currentMatrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * 100) + 1);
        }
        currentMatrix.push(row);
    }
    displayMatrix(currentMatrix);
    consoleElement.textContent = `матрица ${rows}x${cols}:\n${formatMatrixForConsole(currentMatrix)}`;
}

function displayMatrix(matrix) {
    const container = document.getElementById('matrixContainer');
    container.innerHTML = '<h4>Матрица:</h4>';
    const matrixDiv = document.createElement('div');
    matrixDiv.className = 'matrix-container';
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const cell = document.createElement('div');
            cell.className = 'matrix-cell';
            cell.textContent = matrix[i][j];
            cell.id = `matrix-cell-${i}-${j}`;
            matrixDiv.appendChild(cell);
        }
    }
    container.appendChild(matrixDiv);
}

function formatMatrixForConsole(matrix) {
    let result = '';
    for (let i = 0; i < matrix.length; i++) {
        result += '[' + matrix[i].join(', ') + ']\n';
    }
    return result;
}

function transposeMatrix() {
    if (currentMatrix.length === 0) return alert('Для начала нужна матрица');
    const rows = currentMatrix.length;
    const cols = currentMatrix[0].length;
    const transposed = [];
    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(currentMatrix[i][j]);
        }
        transposed.push(newRow);
    }
    currentMatrix = transposed;
    displayMatrix(transposed);
    document.getElementById('matrixConsole').textContent = `танспонированная матрица (${cols}x${rows}):\n${formatMatrixForConsole(transposed)}`;
}

function sumMatrixDiagonals() {
    if (currentMatrix.length === 0) return alert('Для начала нужна матрица');
    const n = currentMatrix.length;
    if (n !== currentMatrix[0].length) return alert('она должна быть квадратной');
    let main = 0, secondary = 0;
    for (let i = 0; i < n; i++) {
        main += currentMatrix[i][i];
        secondary += currentMatrix[i][n - 1 - i];
        highlightMatrixCell(i, i);
        highlightMatrixCell(i, n - 1 - i);
    }
    document.getElementById('matrixConsole').textContent = `главная диагональ: ${main}\nпобочная диагональ: ${secondary}\nсумма: ${main + secondary}`;
    setTimeout(() => {
        for (let i = 0; i < n; i++) {
            removeHighlightMatrixCell(i, i);
            removeHighlightMatrixCell(i, n - 1 - i);
        }
    }, 3000);
}

function highlightMatrixCell(row, col) {
    const cell = document.getElementById(`matrix-cell-${row}-${col}`);
    if (cell) cell.classList.add('highlighted');
}

function removeHighlightMatrixCell(row, col) {
    const cell = document.getElementById(`matrix-cell-${row}-${col}`);
    if (cell) cell.classList.remove('highlighted');
}