root = 'svg/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info', emoji.theory+'Информация'],
            [root+'main/css',  emoji.code+'CSS-свойства'],
        ]
    },
    {
        title: 'Элементы',
        themes: [
            [root+'elements/figure',     emoji.chevron+'Фигуры'],
            [root+'elements/text',       setTheme(1, ['text'])],
            [root+'elements/image',      setTheme(1, ['image'])],
            [root+'elements/mask',       setTheme(1, ['mask'])],
            [root+'elements/clip-path',  setTheme(1, ['clipPath'])],
            [root+'elements/filters',    setTheme(1, ['filter'])],
            [root+'elements/gradients',  setTheme(1, ['linearGradient', 'radialGradient'])],
            [root+'elements/background', setTheme(1, ['background'])],
        ]
    },
]
