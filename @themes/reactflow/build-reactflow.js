root = 'reactflow/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
        ]
    },
    {
        title: 'Zustand',
        accent: true,
        themes: [
            [root+'zustand/info', emoji.theory+'Информация'],
            [root+'zustand/install', emoji.code+'Установка и настройка'],
            [root+'zustand/usestate-vs-zustand', emoji.star+'useState vs Zustand'],
            [root+'zustand/useStore', setTheme(5, ['useStore'])],
        ]
    },
    {
        title: 'Dagre',
        accent: true,
        themes: [
            [root+'dagre/info', emoji.theory+'Информация'],
            [root+'dagre/install', emoji.code+'Установка и настройка'],
            [root+'dagre/use', emoji.fire+'Использование'],
        ]
    },
    {
        title: 'Components',
        themes: [
            [root+'components/Handle', setTheme(1, ['&lt;Handle /&gt;'])],
        ]
    },
    {
        title: 'Elements',
    },
    {
        title: 'Nodes',
        child: true,
        themes: [
            [root+'elements/nodes', emoji.chevron+'Nodes'],
        ]
    },
    {
        title: 'Edges',
        child: true,
        themes: [
            [root+'elements/edges', emoji.chevron+'Edges'],
            [root+'elements/custom-edge', 'Custom Edge'],
            [root+'elements/edge-styles', 'Edge Styles'],
        ]
    },
    {
        title: 'Methods',
        themes: [
            [root+'methods/onConnect', setTheme(1, ['onConnect'])],
        ]
    },
    {
        title: 'Styles',
        themes: [
            [root+'styles/classNames', 'classNames'],
        ]
    },
    {
        title: 'Implementation',
        themes: [
            [root+'implementation/topics', 'Темы из документации'],
            [root+'implementation/features', 'Функционал'],
        ]
    },
]
