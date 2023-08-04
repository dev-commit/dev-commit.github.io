root = 'auth/';

ARR_MODULE = [
    {
        title: 'Session',
        themes: [
            [root+'session/session', 'Session & Cookie'],
        ]
    },
    {
        title: 'JWT',
        themes: [
            [root+'jwt/info',      emoji.theory+'Информация'],
            [root+'jwt/algoritm', 'Алгоритм работы'],
            [root+'jwt/tokens',   'Токены'],
        ]
    },
    {
        title: 'Сервисы',
        themes: [
            [root+'services/auth0', setTheme(1, ['auth0'])],
            [root+'services/okta',  setTheme(1, ['okta'])],
        ]
    },
]
