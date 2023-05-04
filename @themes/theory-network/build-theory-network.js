root = 'theory-network/';

ARR_MODULE = [
    {
        title: 'Теория',
        themes: [
            [root+'theory/client-server', emoji.theory+'Client-Server'],
            [root+'theory/url',           emoji.theory+'URL и URI'],
        ]
    },
    {
        title: 'HTTP',
        accent: true,
        themes: [
            [root+'http/http',                emoji.fire+'HTTP'],
            [root+'http/http2',               emoji.fire+'HTTP/2'],
            [root+'http/https',               emoji.fire+'HTTPS'],
            [root+'http/1-http-structure',    emoji.star+'1. Структура протокола'],
            [root+'http/2-http-methods',      emoji.star+'2. HTTP Methods'],
            [root+'http/3-http-headers',      emoji.star+'3. HTTP Headers'],
            [root+'http/4-http-status-codes', emoji.star+'4. HTTP Status Codes'],
        ]
    },
    {
        title: 'Протоколы',
        themes: [
            [root+'protocols/osi',  emoji.theory+'Сетевая модель OSI'],
            [root+'protocols/tcp',  emoji.chevron+'TCP'],
            [root+'protocols/udp',  emoji.chevron+'UDP'],

        ]
    },
    {
        title: 'Работа с API',
        themes: [
            [root+'api/api',     emoji.theory+'API'],
            [root+'api/rest-vs-soap',     emoji.theory+'REST vs SOAP'],
            [root+'api/soap',    '1. SOAP'],
            [root+'api/rest',    '2. REST API'],
            [root+'api/graphql', '3. GraphQL'],
        ]
    },
    {
        title: 'Hacking',
        themes: [
            [root+'hacking/xss',           'XSS'],
            [root+'hacking/sql-injection', 'SQL инъекции'],
        ]
    },
]
