root = 'theory-network/';

ARR_MODULE = [

    {
        title: 'HTTP',
        accent: true,
        themes: [
            [root+'http/http',                emoji.fire+'HTTP'],
            [root+'http/http2',               'HTTP/2'],
            [root+'http/https',               'HTTPS'],
            [root+'http/http-and-https',      'HTTP и HTTPS'],
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
            [root+'protocols/tcp',  'TCP'],
            [root+'protocols/udp',  'UDP'],
        ]
    },
]
