root = 'zustand/';

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
        title: 'API',
        themes: [
            [root+'api/useStore', setTheme(1, ['useStore'])],
            [root+'api/create', setTheme(1, ['create'])],
        ]
    },
]
