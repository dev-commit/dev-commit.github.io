root = 'theory-solid/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info'),
        ]
    },
    {
        title: 'Principles',
        selected: true,
        themes: [
            [root+'principles/1-srp',  emoji.star+'Single Responsibility'],
            [root+'principles/2-ocp',  emoji.star+'Open Closed'],
            [root+'principles/3-lsp',  emoji.star+'Liskov Substitution'],
            [root+'principles/4-isp',  emoji.star+'Interface Segregation'],
            [root+'principles/5-dip',  emoji.star+'Dependency Inversion'],
        ]
    },
]
