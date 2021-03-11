ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            ['css-grid/main/info',           'Информация'],
            ['css-grid/main/container',      'Grid Container'],
        ]
    },
    {
        title: 'Объединение ячеек',
        themes: [
            ['css-grid/element-union/grid-column', setTheme(1, ['grid-column', 'grid-row'])],
            ['css-grid/element-union/grid-area',   setTheme(1, ['grid-area'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            ['css-grid/other/align-elements', 'Выравнивание элементов'],
            ['css-grid/other/grid-auto-flow',  setTheme(1, ['grid-auto-flow'])],
        ]
    },
]
