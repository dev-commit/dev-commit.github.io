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
        title: 'Cases',
        themes: [
            [root+'cases/usestate-vs-zustand', emoji.star+'useState vs Zustand'],
            [root+'cases/classNames', 'classNames'],
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
        title: 'Implementation',
        themes: [
            [root+'implementation/topics', 'Темы из документации'],
            [root+'implementation/features', 'Функционал'],
        ]
    },
]
