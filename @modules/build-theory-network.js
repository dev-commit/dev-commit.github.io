root = 'theory-network/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
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
            [root+'http/2-http-headers',      emoji.star+'2. HTTP Headers'],
            [root+'http/3-http-methods',      emoji.star+'3. HTTP Methods'],
            [root+'http/4-http-status-codes', emoji.star+'4. HTTP Status Codes'],
        ]
    },
    {
        title: 'Протоколы',
        themes: [
            [root+'protocols/osi',  emoji.theory+'Сетевая модель OSI'],
            [root+'protocols/tcp',  emoji.chevron+'TCP'],
            [root+'protocols/udp',  emoji.chevron+'UDP'],
            [root+'protocols/soap', emoji.star+'SOAP'],
        ]
    },
    {
        title: 'Работа с API',
        themes: [
            [root+'tech-api/rest',    emoji.fire+'REST API'],
            [root+'tech-api/graphql', 'GraphQL'],
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
