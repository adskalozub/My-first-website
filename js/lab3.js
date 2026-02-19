//Counter-strike:source и формы заполнения

//Рудимент для работы вывода, от которого я не смог избавиться, но он работает
function showVariantForm(variantIndex) {
    //Как раз кнопка скрытия форм
    for (let i = 1; i <= 5; i++) {
        const element = document.getElementById(`variant${i}`);
        if (element) {
            element.classList.remove('active');
        }
    }
    
    //Показывает на что нажал
    if (variantIndex >= 1 && variantIndex <= 5) {
        const selectedElement = document.getElementById(`variant${variantIndex}`);
        if (selectedElement) {
            selectedElement.classList.add('active');
        }
    }
}

//обработка основной формы
document.addEventListener('DOMContentLoaded', function() {
    //по умолчанию показывет форму 1
    showVariantForm(1);
    
    //Обработка отправки формы
    const mainForm = document.getElementById('mainForm');
    if (mainForm) {
        mainForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showFormData();
        });
    }
    
    //Инициализация элементов управления
    initFormControls();
    
    //Показывает данные формы
    updateStyleOutput();
});

//Показывает данные из основной формы
function showFormData() {
    const form = document.getElementById('mainForm');
    const formData = new FormData(form);
    const data = {};
    
    //Собирает данные с формы
    for (let [key, value] of formData.entries()) {
        if (key === 'interests') {
            if (!data[key]) data[key] = [];
            data[key].push(value);
        } else {
            data[key] = value;
        }
    }
    
    //Формирование данных для формы
    let output = '=== Данные формы ===\n\n';
    
    //Поля для ввода
    if (data.fullName) output += `ФИО: ${data.fullName}\n`;
    if (data.email) output += `Email: ${data.email}\n`;
    if (data.phone) output += `Телефон: ${data.phone}\n`;
    if (data.birthDate) output += `Дата рождения: ${data.birthDate}\n`;
    if (data.gender) output += `Пол: ${data.gender === 'male' ? 'Мужской' : data.gender === 'female' ? 'Женский' : 'Другой'}\n`;
    
    //Нужно учитывать интересы!!!!!!!!
    if (data.interests && data.interests.length > 0) {
        const interestsMap = {
            'sports': 'Спорт',
            'music': 'Музыка',
            'books': 'Книги',
            'travel': 'Путешествия',
            'tech': 'Технологии'
        };
        output += `Интересы: ${data.interests.map(i => interestsMap[i] || i).join(', ')}\n`;
    }
    
    if (data.country) {
        const countryMap = {
            'ru': 'Россия',
            'by': 'Беларусь',
            'tkm': 'Туркменистан',
            'cn': 'Китай',
            'other': 'Другая'
        };
        output += `Страна: ${countryMap[data.country] || data.country}\n`;
    }
    
    if (data.message) output += `О себе: ${data.message}\n`;
    
    document.getElementById('formDataOutput').textContent = output;
}

//Пример настройки цвета формы заполнения
function applyColorSettings() {
    const colorPicker = document.getElementById('colorPicker');
    const rangeInput = document.getElementById('rangeInput');
    const gradientType = document.querySelector('input[name="gradient"]:checked');
    
    const color = colorPicker.value;
    const saturation = rangeInput.value;
    const gradient = gradientType ? gradientType.value : 'linear';
    
    //Обновление range
    document.getElementById('rangeValue').textContent = `${saturation}%`;
    
    //применение стилей к ней
    const preview = document.getElementById('colorPreview');
    preview.style.background = gradient === 'radial' 
        ? `radial-gradient(circle, ${color} 0%, ${adjustColor(color, -saturation)} 100%)`
        : `linear-gradient(135deg, ${color} 0%, ${adjustColor(color, -saturation)} 100%)`;
    preview.textContent = `Цвет: ${color}, Насыщенность: ${saturation}%, Градиент: ${gradient === 'linear' ? 'Линейный' : 'Радиальный'}`;
    preview.style.color = getContrastColor(color);
}

//выбор цветов
function adjustColor(hex, percent) {
    //Изменение яркости цвета
    const num = parseInt(hex.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    
    return `#${(
        0x1000000 +
        (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)
    ).toString(16).slice(1)}`;
}

//Изменение контраста цвета
function getContrastColor(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    //Формула расчета яркости 
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    return brightness > 128 ? '#000000' : '#ffffff';
}

//Выбор транспорта (вдруг захочется отдохнуть где-то за МКАДом или что-то вроде того)
function showTransportSelection() {
    const checkboxes = document.querySelectorAll('#variantForm2 input[name="transport"]:checked');
    const transportType = document.getElementById('transportType').value;
    
    const transports = Array.from(checkboxes).map(cb => {
        const labels = {
            'plane': 'Самолет',
            'train': 'Поезд',
            'car': 'Авто',
            'bus': 'Автобус'
        };
        return labels[cb.value] || cb.value;
    });
    
    const typeLabels = {
        'public': 'Общ',
        'private': 'Част',
        'rental': 'Аренда'
    };
    
    let output = '=== Выбранный транспорт ===\n\n';
    if (transports.length > 0) {
        output += `Вы выбрали: ${transports.join(', ')}\n`;
    } else {
        output += 'Ничего не выбрано.\n';
    }
    
    if (transportType) {
        output += `Тип транспорта: ${typeLabels[transportType] || transportType}\n`;
    }
    
    document.querySelector('#transportOutput pre').textContent = output;
}

//Сбор статистики для анонимного онлайн теста (ну, типо анонимного, ничего кроме пола и возроста)
function showGenderSelection() {
    const gender = document.querySelector('#variantForm3 input[name="gender_variant"]:checked');
    const ageGroup = document.getElementById('ageGroup').value;
    
    const genderLabels = {
        'male': 'Мужчина',
        'female': 'Женщина',
        'other': 'Другой'
    };
    
    const ageLabels = {
        '18-25': '18-25 лет',
        '26-35': '26-35 лет',
        '36-50': '36-50 лет',
        '51+': '51+ лет'
    };
    
    let output = '=== Выбранные данные ===\n\n';
    if (gender) {
        output += `Вы: ${genderLabels[gender.value] || gender.value}\n`;
    } else {
        output += 'Ничего не выбрано\n';
    }
    
    if (ageGroup) {
        output += `Ваш возраст: ${ageLabels[ageGroup] || ageGroup}\n`;
    }
    
    document.querySelector('#genderOutput pre').textContent = output;
}

//Стилизация
function initFormControls() {
    //Обновляем значение ползунков
    const fontSize = document.getElementById('fontSize');
    const borderRadius = document.getElementById('borderRadius');
    const borderWidth = document.getElementById('borderWidth');
    
    if (fontSize) {
        fontSize.addEventListener('input', function() {
            document.getElementById('fontSizeValue').textContent = `${this.value}px`;
        });
    }
    
    if (borderRadius) {
        borderRadius.addEventListener('input', function() {
            document.getElementById('borderRadiusValue').textContent = `${this.value}px`;
        });
    }
    
    if (borderWidth) {
        borderWidth.addEventListener('input', function() {
            document.getElementById('borderWidthValue').textContent = `${this.value}px`;
        });
    }
    
    //Инициализация 1
    const rangeInput = document.getElementById('rangeInput');
    if (rangeInput) {
        rangeInput.addEventListener('input', function() {
            document.getElementById('rangeValue').textContent = `${this.value}%`;
        });
    }
}

//Применить шаблон стиля
function applyStylePreset(preset) {
    const form = document.getElementById('customStyledForm');
    const fontSelect = document.getElementById('fontFamily');
    const fontSize = document.getElementById('fontSize');
    const bgColor = document.getElementById('bgColor');
    const textColor = document.getElementById('textColor');
    const borderColor = document.getElementById('borderColor');
    const borderRadius = document.getElementById('borderRadius');
    const borderWidth = document.getElementById('borderWidth');
    
    switch(preset) {
        case 'default':
            fontSelect.value = 'Arial, sans-serif';
            fontSize.value = 16;
            bgColor.value = '#ffffff';
            textColor.value = '#2c3e50';
            borderColor.value = '#3498db';
            borderRadius.value = 8;
            borderWidth.value = 2;
            break;
            
        case 'modern':
            fontSelect.value = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
            fontSize.value = 14;
            bgColor.value = '#f8f9fa';
            textColor.value = '#343a40';
            borderColor.value = '#6c757d';
            borderRadius.value = 12;
            borderWidth.value = 1;
            break;
            
        case 'dark':
            fontSelect.value = 'Arial, sans-serif';
            fontSize.value = 16;
            bgColor.value = '#343a40';
            textColor.value = '#f8f9fa';
            borderColor.value = '#495057';
            borderRadius.value = 4;
            borderWidth.value = 2;
            break;
            
        case 'colorful':
            fontSelect.value = "'Comic Sans MS', cursive";
            fontSize.value = 18;
            bgColor.value = '#fff5f5';
            textColor.value = '#d63031';
            borderColor.value = '#e17055';
            borderRadius.value = 20;
            borderWidth.value = 3;
            break;
    }
    
    //Обновление значения отображения
    document.getElementById('fontSizeValue').textContent = `${fontSize.value}px`;
    document.getElementById('borderRadiusValue').textContent = `${borderRadius.value}px`;
    document.getElementById('borderWidthValue').textContent = `${borderWidth.value}px`;
    
    //применение стиля
    updateFormStyle();
}

//обновление стиля формы
function updateFormStyle() {
    const form = document.getElementById('customStyledForm');
    const fontFamily = document.getElementById('fontFamily').value;
    const fontSize = document.getElementById('fontSize').value + 'px';
    const bgColor = document.getElementById('bgColor').value;
    const textColor = document.getElementById('textColor').value;
    const borderColor = document.getElementById('borderColor').value;
    const borderRadius = document.getElementById('borderRadius').value + 'px';
    const borderWidth = document.getElementById('borderWidth').value + 'px';
    
    //применение стиля к ней
    form.style.fontFamily = fontFamily;
    form.style.fontSize = fontSize;
    form.style.backgroundColor = bgColor;
    form.style.color = textColor;
    form.style.borderColor = borderColor;
    form.style.borderRadius = borderRadius;
    form.style.borderWidth = borderWidth;
    
    //применение стилей к элементам внутри формы
    const inputs = form.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.style.fontFamily = fontFamily;
        input.style.fontSize = fontSize;
        input.style.backgroundColor = getContrastColor(bgColor) === '#ffffff' ? '#ffffff' : '#f8f9fa';
        input.style.color = getContrastColor(bgColor) === '#ffffff' ? '#000000' : textColor;
        input.style.borderColor = borderColor;
        input.style.borderRadius = borderRadius;
    });
    
    //обновление вывода текущего стиля
    updateStyleOutput();
}

//Обновлен вывод текущего стиля
function updateStyleOutput() {
    const form = document.getElementById('customStyledForm');
    const computedStyle = window.getComputedStyle(form);
    
    const styles = {
        'font-family': computedStyle.fontFamily,
        'font-size': computedStyle.fontSize,
        'background-color': computedStyle.backgroundColor,
        'color': computedStyle.color,
        'border-color': computedStyle.borderColor,
        'border-radius': computedStyle.borderRadius,
        'border-width': computedStyle.borderWidth,
        'padding': computedStyle.padding,
        'margin': computedStyle.margin
    };
    
    let output = '=== Текущие стили формы ===\n\n';
    for (const [property, value] of Object.entries(styles)) {
        output += `${property}: ${value}\n`;
    }
    
    document.getElementById('currentStyles').textContent = output;
}

//Вывод стилизованной формы
function submitStyledForm() {
    const name = document.getElementById('styledName').value;
    const email = document.getElementById('styledEmail').value;
    const message = document.getElementById('styledMessage').value;
    
    let output = '=== Данные стилизованной формы ===\n\n';
    output += `Имя: ${name || 'Не указано'}\n`;
    output += `Email: ${email || 'Не указано'}\n`;
    output += `Сообщение: ${message || 'Не указано'}\n`;
    output += `\nДата отправки: ${new Date().toLocaleString()}`;
    
    alert('Форма успешно отправлена.\n\nВ концоли должны быть данные.');
}