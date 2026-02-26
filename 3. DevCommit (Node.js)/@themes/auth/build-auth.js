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
            [root+'jwt/info',        emoji.theory+'Информация'],
            [root+'jwt/algoritm',   'Алгоритм работы'],
            [root+'jwt/tokens',     'Токены'],
            [root+'jwt/secret-key', 'Secret Key'],
        ]
    },
    {
        title: 'Сервисы',
        themes: [
            [root+'services/NextAuth',  setTheme(1, ['NextAuth.js'])],
            [root+'services/Auth0', setTheme(1, ['Auth0'])],
            [root+'services/Okta',  setTheme(1, ['Okta'])],
        ]
    },
]
