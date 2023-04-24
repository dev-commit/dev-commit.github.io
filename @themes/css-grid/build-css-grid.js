root = 'css-grid/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            [root+'main/container', 'Grid Container'],
        ]
    },
    {
        title: 'Объединение ячеек',
        themes: [
            [root+'element-union/grid-column', setTheme(1, ['grid-column', 'grid-row'])],
            [root+'element-union/grid-area',   setTheme(1, ['grid-area'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/align-elements', 'Выравнивание элементов'],
            [root+'other/grid-auto-flow',  setTheme(1, ['grid-auto-flow'])],
        ]
    },
]
