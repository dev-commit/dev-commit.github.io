root = 'lodash/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            [root+'main/package-types', 'Типы для пакетов'],
        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/debounce', setTheme(1, ['debounce'])],
            [root+'methods/isEqual', setTheme(1, ['isEqual'])],
        ]
    },
]
