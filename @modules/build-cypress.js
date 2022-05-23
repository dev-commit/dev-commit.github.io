root = 'cypress/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info',        emoji.theory+'Информация'],
            [root+'main/npm',         emoji.lemon+'Установка'],
            [root+'main/code',        emoji.code+'Структура'],
        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/should',   setTheme(1, ['should'])],
            [root+'methods/type',     setTheme(1, ['type', 'clear', 'blur'])],
            [root+'methods/visit',    setTheme(1, ['visit', 'pause', 'wait'])],
            [root+'methods/get',      setTheme(1, ['get'])],
        ]
    },
    {
        title: 'Элементы',
        themes: [
            [root+'elements/fixtures', setTheme(3, ['Fixtures'])],
            [root+'elements/plugins',  setTheme(3, ['Plugins'])],
            [root+'elements/support',  setTheme(3, ['Support'])],
        ]
    },
    {
        title: 'Guides',
        themes: [
            [root+'guides/network-requests', emoji.star+'Network Requests'],
        ]
    },
]
