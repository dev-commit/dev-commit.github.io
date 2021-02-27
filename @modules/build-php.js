ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            ['php/main/info',       'Информация'],
            ['php/main/variables',  'Переменные'],
            ['php/main/cycle',      'Циклы'],
            ['php/main/array',      'Массивы'],
            ['php/main/function',   'Функции'],
            ['php/main/if',         setTheme(1, ['if-else'])],
            ['php/main/switch',     setTheme(1, ['switch-case'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            ['php/other/function-php',   'Функции PHP'],
            ['php/other/server',         'Суперглобальный массив SERVER'],
            ['php/other/open-server',    'PHP Open Server'],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            ['php/samples/files',         emoji.code+'Файлы и директории'],
            ['php/samples/image-loader',  emoji.code+'Изображения'],
            ['php/samples/email',         emoji.code+'Отправка email'],
            ['php/samples/json-server',   emoji.code+'JSON Server'],
        ]
    },
    {
        title: 'MySQL',
        themes: [
            ['php/mysql/mysql',   'Работа с MySQL'],
        ]
    },
]



