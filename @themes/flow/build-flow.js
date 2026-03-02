root = 'flow/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
            getLink(root, 'variants'),
        ]
    },
    {
        title: 'Темы',
        themes: [
            [root+'themes/type-data',   emoji.items+'Типы данных'],
            [root+'themes/var',         emoji.fire+'Переменные'],
            [root+'themes/function',    emoji.fire+'Функции'],
            [root+'themes/type',        emoji.fire+'Тип'],
            [root+'themes/react',       'Использование с React.js'],
            [root+'themes/vscode',      'Настройка VSCode'],
        ]
    },
]
