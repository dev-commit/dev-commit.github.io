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
            [root+'methods/methods',  'Общие методы'],
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
        title: 'Библиотеки',
        themes: [
            [root+'libs/cypress-image-snapshot',  '<u-inline-circle>1</u-inline-circle> '+setTheme(2, ['cypress-image-snapshot'])],
            [root+'libs/mocha-allure-reporter',  '<u-inline-circle>4</u-inline-circle> '+setTheme(2, ['mocha-allure-reporter', 'allure-commandline'])],

            [root+'libs/cypress-mochawesome-reporter',  setTheme(2, ['cypress-mochawesome-reporter'])],
            [root+'libs/cypress-visual-regression',  setTheme(2, ['cypress-visual-regression'])],
            [root+'libs/cypress-file-upload',  setTheme(2, ['cypress-file-upload'])],
        ]
    },
    {
        title: 'Guides',
        themes: [
            [root+'guides/network-requests', emoji.star+'Network Requests'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/trash', 'Свалка'],
        ]
    },
]
