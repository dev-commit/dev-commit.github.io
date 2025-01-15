root = 'network/';

ARR_MODULE = [
    {
        title: 'Теория',
        themes: [
            [root+'theory/client-server', emoji.theory+'Client-Server'],
            [root+'theory/url',           emoji.theory+'URL и URI'],
        ]
    },
    {
        title: 'Технологии',
        themes: [
            [root+'tech/websocket',      emoji.star+'WebSocket'],
            [root+'tech/graphql',        emoji.star+'GraphQL'],
            [root+'tech/webrtc',         emoji.star+'WebRTC'],
            [root+'tech/long-polling',   'Long Polling'],
            [root+'tech/sse',            'SSE (Server Sent Events)'],
            ['', ''],
            [root+'tech/cors',  emoji.items+'CORS'],
            [root+'tech/comet', 'Comet'],
            [root+'tech/jsonp', 'JSONP'],
        ]
    },
    {
        title: 'Работа с API',
        themes: [
            [root+'api/api',          emoji.theory+'API'],
            [root+'api/rest-vs-soap', emoji.theory+'REST vs SOAP'],
            [root+'api/rest',         emoji.fire+'REST API'],
            [root+'api/soap',         'SOAP'],
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
