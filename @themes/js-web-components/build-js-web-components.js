root = 'js-web-components/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
        ]
    },
    {
        title: 'Элементы',
        themes: [
            [root+'elements/custom-elements', '1. Custom Elements'],
            [root+'elements/shadow-dom',      '2. Shadow DOM'],
            [root+'elements/html-templates',  '3. HTML Templates'],
            [root+'elements/html-import',     '4. HTML Import'],
        ]
    },
]
