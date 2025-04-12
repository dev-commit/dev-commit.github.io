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
            [root+'libs/cypress-image-snapshot',  setTheme(1, ['cypress-image-snapshot'])],
            [root+'libs/cypress-axe',  setTheme(1, ['cypress-axe', 'axe-core'])],
            [root+'libs/mochawesome',  setTheme(1, ['mochawesome'])],
            [root+'libs/mocha-allure-reporter',  setTheme(1, ['mocha-allure-reporter', 'allure-commandline'])],

            [root+'libs/cypress-mochawesome-reporter',  setTheme(6, ['cypress-mochawesome-reporter'])],
            [root+'libs/cypress-visual-regression',  setTheme(6, ['cypress-visual-regression'])],
            [root+'libs/cypress-file-upload',  setTheme(6, ['cypress-file-upload'])],
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
