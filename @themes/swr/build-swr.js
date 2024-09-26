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
            [root+'api/mutate', setTheme(6, ['mutate'])],
            [root+'api/useSWRInfinite', setTheme(6, ['useSWRInfinite'])],
            [root+'api/useSWRSubscription', setTheme(6, ['useSWRSubscription'])],
            [root+'api/SWRConfig', setTheme(6, ['SWRConfig', 'useSWRConfig'])],
        ]
    },
]
