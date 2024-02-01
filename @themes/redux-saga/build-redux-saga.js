root = 'redux-saga/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
        ]
    },

    {
        title: 'Методы',
        themes: [
            [root+'methods/call', setTheme(1, ['call'])],
            [root+'methods/put', setTheme(1, ['put'])],
            [root+'methods/take', setTheme(1, ['take'])],
            [root+'methods/all', setTheme(1, ['all'])],
            [root+'methods/delay', setTheme(1, ['delay'])],
            [root+'methods/fork', setTheme(1, ['fork'])],
            [root+'methods/select', setTheme(1, ['select'])],
            [root+'methods/cancel', setTheme(1, ['cancel'])],
            [root+'methods/debounce', setTheme(1, ['debounce'])],
            [root+'methods/takeEvery', setTheme(1, ['takeEvery'])],
            [root+'methods/takeLatest', setTheme(1, ['takeLatest'])],
        ]
    },
    {
        title: 'Общее',
        themes: [
            [root+'common/accessing-store-value', 'Доступ к значению Store'],
            [root+'common/saga-vs-thunk', 'redux-saga vs redux-thunk'],
            [root+'common/questions', 'Вопросы'],
        ]
    },
]
