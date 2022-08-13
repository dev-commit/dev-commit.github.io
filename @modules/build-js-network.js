root = 'js-network/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'theory/info',          emoji.theory+'Информация'],
            [root+'theory/http',          emoji.coconut+'HTTP'],
            [root+'theory/http2',         emoji.coconut+'HTTP/2'],
            [root+'theory/https',         emoji.coconut+'HTTPS'],
            [root+'theory/soap',          emoji.theory+'SOAP'],
            [root+'theory/rest',          emoji.boom+'1. REST API'],
            [root+'theory/rest-json-api', emoji.boom+'2. REST JSON API'],
            [root+'theory/graphql',       emoji.boom+'3. GraphQL'],
        ]
    },
    {
        title: 'AJAX и технологии',
        themes: [
            [root+'ajax/info',           emoji.theory+'Описание'],
            [root+'ajax/xmlhttprequest', emoji.fire+'1. XMLHttpRequest'],
            [root+'ajax/fetch',          emoji.fire+'2. Fetch'],
            [root+'ajax/axios',          emoji.fire+'3. Axios'],
            [root+'ajax/request-js',     emoji.code+'Request JS'],
            [root+'ajax/response-php',   emoji.code+'Response PHP'],
        ]
    },
    {
        title: 'Технологии',
        themes: [
            [root+'tech/websocket',      emoji.lemon+'WebSocket'],
            [root+'tech/cors',           emoji.lemon+'CORS'],
            [root+'tech/webrtc',         emoji.lemon+'WebRTC'],
            [root+'tech/jsonp',          'JSONP'],
            [root+'tech/comet',          'Comet'],
            [root+'tech/long-polling',   'Long Polling'],
            [root+'tech/sse',            'SSE (Server Sent Events)'],
        ]
    },
    {
        title: 'Протоколы',
        themes: [
            [root+'protocols/osi', emoji.theory+'Сетевая модель OSI'],
            [root+'protocols/tcp', emoji.chevron+'TCP'],
            [root+'protocols/udp', emoji.chevron+'UDP'],
        ]
    },
    {
        title: 'Hacking',
        themes: [
            [root+'hacking/xss',            'XSS'],
            [root+'hacking/sql-injection',  'SQL инъекции'],
        ]
    },
]
