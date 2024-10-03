root = 'axios/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
        ]
    },
    {
        title: 'Общее',
        themes: [
            [root+'common/http-methods', 'HTTP-методы'],
            [root+'common/samples', 'Примеры'],
        ]
    },
    {
        title: 'Services',
        themes: [
            [root+'services/instance', 'Создание instance'],
            [root+'services/services', 'Services'],
            [root+'services/error-handling', 'Обработка ошибок'],
        ]
    },
]
