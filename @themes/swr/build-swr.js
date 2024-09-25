root = 'swr/';

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
            [root+'api/useSWR', setTheme(1, ['useSWR'])],
            [root+'api/useSWRMutation', setTheme(1, ['useSWRMutation'])],
        ]
    },
]
