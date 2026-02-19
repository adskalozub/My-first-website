// Главная страница сайта

// Функция для проверки доступности всех лабораторных работ
function checkAllLabsAvailability() {
    const labUrls = [
        'labs/lab1.html',
        'labs/lab2.html',
        'labs/lab3.html',
        'labs/lab4.html',
        'labs/lab5.html',
        'labs/lab6.html',
        'labs/lab7.html',
        'labs/lab8.html'
    ];
    
    let availableCount = 0;
    let missingLabs = [];
    
    // Проверяем каждую лабораторную работу
    labUrls.forEach((url, index) => {
        const labNumber = index + 1;
        fetch(url, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    availableCount++;
                    console.log(`Лабораторная работа ${labNumber}: доступна`);
                } else {
                    missingLabs.push(labNumber);
                    console.log(`Лабораторная работа ${labNumber}: недоступна`);
                }
            })
            .catch(error => {
                missingLabs.push(labNumber);
                console.log(`Лабораторная работа ${labNumber}: ошибка проверки`);
            })
            .finally(() => {
                // После проверки всех лабораторных показываем результат
                if (labNumber === 8) {
                    if (missingLabs.length === 0) {
                        showNotification('Все лабораторные работы доступны!', 'success');
                    } else {
                        showNotification(`Недоступны лабораторные: ${missingLabs.join(', ')}`, 'error');
                    }
                }
            });
    });
}