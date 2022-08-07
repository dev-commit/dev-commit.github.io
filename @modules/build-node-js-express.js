root = 'node-js-express/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            [root+'main/info',         emoji.theory+'Информация'],
            [root+'main/install',      emoji.code+'Установка и настройка'],
        ]
    },
    {
        title: 'Использование',
        themes: [
            [root+'usage/routes',       'Маршрутизация'],
        ]
    },
    {
        title: 'Шаблонизаторы',
        themes: [
            [root+'templates/EJS',                setTheme(2, ['EJS'])],
            [root+'templates/ExpressHandlebars',  setTheme(2, ['Express Handlebars'])],
        ]
    },
]
