root = 'nest-js/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
        ]
    },
    {
        title: 'Элементы',
        accent: true,
        themes: [
            [root+'elements/structure',    emoji.fire+'Структура'],
        ]
    },
    {
        title: '1. Controller',
        child: true,
        themes: [
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



