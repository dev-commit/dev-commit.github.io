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
            [root+'elements/custom-elements', emoji.chevron+'1. Custom Elements'],
            [root+'elements/shadow-dom',      emoji.chevron+'2. Shadow DOM'],
            [root+'elements/html-templates',  emoji.chevron+'3. HTML Templates'],
            [root+'elements/html-import',     emoji.chevron+'4. HTML Import'],
        ]
    },
]
