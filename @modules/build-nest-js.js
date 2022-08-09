root = 'nest-js/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            [root+'main/info',     emoji.theory+'Информация'],
            [root+'main/install',  emoji.code+'Установка и настройка'],
            [root+'main/cli',      emoji.code+'Nest CLI'],
        ]
    },
    {
        title: '1. Controllers',
        accent: true,
        themes: [
            [root+'controllers/structure',    emoji.star+'Структура'],
            [root+'controllers/http-methods', 'HTTP-методы'],
            [root+'controllers/url-params',   'Динамические параметры в URL'],
            [root+'controllers/redirect',     'Редирект'],
            [root+'controllers/request',      'Request и Response'],
        ]
    },
    {
        title: '2. Services',
        accent: true,
        themes: [
            [root+'services/structure',    emoji.star+'Структура'],
        ]
    },
]
