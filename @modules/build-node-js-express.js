root = 'node-js-express/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            [root+'main/info',    emoji.theory+'Информация'],
            [root+'main/install', emoji.code+'Установка и настройка'],
        ]
    },
    {
        title: 'Маршрутизация',
        themes: [
            [root+'routing/structure',   emoji.code+'Структура'],
            [root+'routing/routes',      emoji.code+'Маршрутизация'],
            [root+'api/get',             setTheme(1, ['get()'])],
            [root+'api/use',             setTheme(1, ['use()'])],
        ]
    },
    {
        title: 'Элементы',
        themes: [
            [root+'elements/middleware', 'Middleware'],
        ]
    },
    {
        title: 'Шаблонизатор EJS',
        accent: true,
        themes: [
            [root+'template-ejs/info',         emoji.theory+'Информация'],
            [root+'template-ejs/install',      emoji.code+'Установка и настройка'],
            [root+'template-ejs/structure',    emoji.fire+'Структура'],
            [root+'template-ejs/tags',         emoji.star+'Tags'],
            [root+'template-ejs/static-files', emoji.star+'Статичные файлы (CSS, etc.)'],
        ]
    },
    {
        title: 'Шаблонизатор Express Handlebars',
        themes: [
            [root+'template-express-handlebars/info',     emoji.theory+'Информация'],
            [root+'template-express-handlebars/install',  emoji.code+'Установка и настройка'],
        ]
    },
]
