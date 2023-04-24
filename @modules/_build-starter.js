root = 'starter/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
            getLink(root, 'use'),
        ]
    },
    {
        title: 'Установка темы',
        themes: [
            [root+'common/onSubmit', setTheme(1, ['onSubmit'])],
            ['', ''],
            [root+'common/onChange', setTheme(5, ['onChange'])],
        ]
    },
    {
        title: 'Акцентный блок',
        accent: true,
        themes: [
            ['', ''],
        ]
    },
    {
        title: 'Блок из одной категории',
        selected: true,
        themes: [
            ['', ''],
        ]
    },
    {
        title: 'Дочерний блок',
        child: true,
        themes: [
            ['', ''],
        ]
    },
]
