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
            [root+'samples/symbols',   emoji.items+'Символы'],
            [root+'samples/search',    emoji.items+'Поиск по словам'],
            [root+'samples/operators', emoji.items+'Операторы'],
            [root+'samples/register',  emoji.items+'Регистр'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/variants',      emoji.code+'Варианты'],
            [root+'other/regexp-class',  'Класс RegExp'],
        ]
    },
]
