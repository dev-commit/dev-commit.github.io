root = 'enzyme/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
        ]
    },
    {
        title: 'API',
        themes: [
            [root+'api/methods-render', emoji.fire+'Методы рендеринга'],
            [root+'api/methods',        emoji.fire+'Методы'],
        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/other',    setTheme(1, ['...'])],
            [root+'methods/state',    setTheme(1, ['state'])],
            [root+'methods/props',    setTheme(1, ['props'])],
            [root+'methods/simulate', setTheme(1, ['simulate'])],
            [root+'methods/debug',    setTheme(1, ['debug'])],
        ]
    },
]
