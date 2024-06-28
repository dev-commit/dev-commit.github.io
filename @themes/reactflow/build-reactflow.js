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
            [root+'components/Handle', '&lt;Handle /&gt;'],
        ]
    },
    {
        title: 'Elements',
        themes: [
            [root+'elements/nodes', 'Nodes'],
            [root+'elements/edges', 'Edges'],
            [root+'elements/custom-edge', 'Custom Edge', true],
            [root+'elements/edge-styles', 'Edge Styles', true],
        ]
    },
    {
        title: 'Methods',
        themes: [
            [root+'methods/onConnect', setTheme(1, ['onConnect'])],
        ]
    },
]
