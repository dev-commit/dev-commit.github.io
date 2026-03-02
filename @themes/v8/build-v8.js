root = 'v8/';

ARR_MODULE = [
    {
        title: 'Движок V8',
        themes: [
            [root+'v8/info', emoji.theory+'Информация'],
        ]
    },
    {
        title: 'Рендеринг',
        accent: true,
        themes: [
            [root+'rendering/critical-rendering-path', emoji.fire+'Critical Rendering Path'],
            [root+'rendering/repaint-and-reflow',      emoji.fire+'Repaint & Reflow'],
            [root+'rendering/requestAnimationFrame',   setTheme(1, ['requestAnimationFrame'])],
        ]
    },
    {
        title: 'Оптимизация',
        accent: true,
        themes: [
            [root+'optimization/info',            emoji.fire+'Оптимизация загрузки'],
            [root+'optimization/website-loading', emoji.theory+'Загрузка веб-страницы'],
            [root+'optimization/caching',         'Кэширование'],
            [root+'optimization/tree-shaking',    'Tree shaking'],
        ]
    },
]
