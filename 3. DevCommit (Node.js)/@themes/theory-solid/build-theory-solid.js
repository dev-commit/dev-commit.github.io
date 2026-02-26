root = 'theory-solid/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info', true),
        ]
    },
    {
        title: 'Principles',
        accent: true,
        themes: [
            [root+'principles/1-srp',  '1. Single Responsibility', false, 'done'],
            [root+'principles/2-ocp',  '2. Open Closed'],
            [root+'principles/3-lsp',  '3. Liskóv Substitution'],
            [root+'principles/4-isp',  '4. Interface Segregation'],
            [root+'principles/5-dip',  '5. Dependency Inversion'],
        ]
    },
]
