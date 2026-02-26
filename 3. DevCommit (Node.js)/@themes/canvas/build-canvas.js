root = 'canvas/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            [root+'main/code',  emoji.code+'Код'],
        ]
    },
    {
        title: 'Фигуры',
        themes: [
            [root+'figures/rectangle', setTheme(1, ['Rectangle'])],
            [root+'figures/arc', setTheme(1, ['Arc'])],
            [root+'figures/line-path', setTheme(1, ['Line', 'Path'])],
        ]
    },
    {
        title: 'Элементы',
        themes: [
            [root+'elements/gradient', 'Gradient'],
            [root+'elements/text', 'Text'],
            [root+'elements/text-gradient', 'Text Gradient'],
        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/clearRect', setTheme(3, ['clearRect'])],
            [root+'methods/scale', setTheme(3, ['scale'])],
            [root+'methods/rotate', setTheme(3, ['rotate'])],
        ]
    },
]
