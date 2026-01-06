root = 'redux-toolkit/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
        ]
    },
    {
        title: 'API',
        themes: [
            [root+'api/createSlice', setTheme(1, ['createSlice'])],
        ]
    },
]
