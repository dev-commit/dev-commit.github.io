root = 'php/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info',       emoji.theory+'Информация'],
            [root+'main/variables',  'Переменные'],
            [root+'main/cycle',      'Циклы'],
            [root+'main/array',      'Массивы'],
            [root+'main/function',   'Функции'],
            [root+'main/if',         setTheme(1, ['if-else'])],
            [root+'main/switch',     setTheme(1, ['switch-case'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/function-php',   'Функции PHP'],
            [root+'other/server',         'Суперглобальный массив SERVER'],
            [root+'other/open-server',    'PHP Open Server'],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            [root+'samples/files',         emoji.code+'Файлы и директории'],
            [root+'samples/image-loader',  emoji.code+'Изображения'],
            [root+'samples/email',         emoji.code+'Отправка email'],
            [root+'samples/json-server',   emoji.code+'JSON Server'],
        ]
    },
    {
        title: 'MySQL',
        themes: [
            [root+'mysql/mysql',   'Работа с MySQL'],
        ]
    },
]
