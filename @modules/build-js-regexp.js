root = 'js-regexp/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            [root+'main/info',          emoji.theory+'Информация'],
            [root+'main/expressions',   emoji.star+'Выражения'],
        ]
    },
    {
        title: 'Примеры',
        accent: true,
        themes: [
            [root+'samples/common',    'Общее'],
            [root+'samples/symbols',   emoji.star+'Символы'],
            [root+'samples/search',    emoji.star+'Поиск по словам'],
            [root+'samples/operators', emoji.star+'Операторы'],
            [root+'samples/register',  emoji.star+'Регистр'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/string',        'Строки'],
            [root+'other/regexp-class',  'Класс RegExp'],
        ]
    },
]
