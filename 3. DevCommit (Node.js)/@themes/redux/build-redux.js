root = 'redux/';

ARR_MODULE = [
    {
        title: 'Общее и теория',
        themes: [
            [root+'common/redux-compare', emoji.fire+'Сравнение React-библиотек'],
            [root+'common/flux',          emoji.theory+'Flux'],
            [root+'common/principles-fp', emoji.theory+'Принципы FP'],
        ]
    },
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
            [root+'methods/createStore',      setTheme(1, ['createStore']), false, 'done'],
            [root+'methods/applyMiddleware',  setTheme(1, ['applyMiddleware'])],
            [root+'methods/combineReducers',  setTheme(1, ['combineReducers'])],
        ]
    },
]
