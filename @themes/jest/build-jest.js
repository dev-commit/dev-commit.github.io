root = 'jest/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
            [root+'main/mocks', 'Mock'],
        ]
    },
    {
        title: 'Элементы',
        themes: [
            [root+'elements/pattern',     emoji.code+'Шаблон'],
            [root+'elements/functions',   emoji.star+'Глобальные функции'],
            [root+'elements/matchers',    emoji.star+'Matchers'],
            [root+'elements/hooks',       emoji.star+'Хуки'],
        ]
    },
    {
        title: 'JavaScript',
        themes: [
            [root+'javascript/sync',        '1. Синхронные тесты'],
            [root+'javascript/async',       '2. Асинхронные тесты'],
            [root+'javascript/mock',        '3. Mock-данные'],
            [root+'javascript/mock-axios',  '4. Mock-данные в Axios'],
        ]
    },
    {
        title: 'Redux',
        themes: [
            [root+'redux/reducers',  'Reducers'],
            [root+'redux/actions',   'Actions'],
        ]
    },
]
