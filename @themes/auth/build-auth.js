root = 'auth/';

ARR_MODULE = [
    {
        title: 'JWT',
        themes: [
            [root+'jwt/info', emoji.theory+'Информация'],
        ]
    },
    {
        title: 'Сервисы',
        themes: [
            [root+'services/auth0', setTheme(1, ['auth0'])],
            [root+'services/okta', setTheme(1, ['okta'])],
        ]
    },
]
