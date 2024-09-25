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
            [root+'tech/cors',  emoji.boom+'CORS'],
            [root+'tech/comet', 'Comet'],
            [root+'tech/jsonp', 'JSONP'],
        ]
    },
]
