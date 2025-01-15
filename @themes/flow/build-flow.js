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
            [root+'themes/var',         emoji.fire+'Задание переменной'],
            [root+'themes/function',    emoji.fire+'Задание функции'],
            [root+'themes/type',        emoji.fire+'Задание типа'],
            [root+'themes/react',       'Использование с React.js'],
            [root+'themes/vscode',      'Настройка VSCode'],
        ]
    },
]
