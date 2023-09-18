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
        title: 'Общее',
        themes: [
            [root+'common/methods', emoji.star+'Методы'],
            [root+'common/accessing-store-value', 'Доступ к значению Store'],
            [root+'common/saga-vs-thunk', 'redux-saga vs redux-thunk'],
            [root+'common/questions', 'Вопросы'],
        ]
    },
]
