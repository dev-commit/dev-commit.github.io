root = 'js-regexp/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'use'),
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
