root = 'cypress/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
            getLink(root, 'use'),
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
        title: 'Fixtures',
        themes: [
            [root+'fixtures/fixture',   setTheme(1, ['fixture'])],
            [root+'fixtures/intercept', setTheme(1, ['intercept'])],
        ]
    },
    {
        title: 'Элементы',
        themes: [
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
