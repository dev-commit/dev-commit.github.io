root = 'mongodb/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info'),
        ]
    },
    {
        title: 'Пакеты',
        themes: [
            [root+'packages/mongoose', setTheme(2, ['Mongoose'])],
        ]
    },
]
