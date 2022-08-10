root = 'nest-js/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            [root+'main/info',          emoji.theory+'Информация'],
            [root+'main/install',       emoji.code+'Установка и настройка'],
            [root+'main/structure',     emoji.fire+'Структура'],
        ]
    },
    {
        title: '1. Controller',
        accent: true,
        themes: [
            [root+'controller/structure',    emoji.star+'Структура'],
            [root+'controller/http-methods', 'HTTP-методы'],
            [root+'controller/url-params',   'Динамические параметры в URL'],
            [root+'controller/redirect',     'Редирект'],
            [root+'controller/request',      'Request и Response'],
        ]
    },
    {
        title: '2. Service',
        child: true,
        themes: [
            [root+'service/structure',    emoji.star+'Структура'],
        ]
    },
    {
        title: '3. Module',
        child: true,
        themes: [
            [root+'module/structure',    emoji.star+'Структура'],
        ]
    },
    {
        title: 'Инструменты',
        themes: [
            [root+'libs/cli',      'Nest CLI'],
            [root+'libs/mongodb',  'Mongodb'],
        ]
    },
]



