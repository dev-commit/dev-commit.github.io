root = 'event-loop/';

ARR_MODULE = [
    {
        title: 'Event Loop',
        accent: true,
        themes: [
		    getLink(root, 'info'),
            [root+'main/runtime', emoji.star+'Архитектура среды выполнения'],
		    [root+'main/tasks',   emoji.star+'Виды задач'],
        ]
    },
    {
        title: 'Примеры на Event Loop',
        themes: [
            [root+'samples/addEventListener', setTheme(5, ['addEventListener'])],
            [root+'samples/onClick',          setTheme(5, ['onClick'])],
		    [root+'samples/other',            'Прочее'],
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
            [root+'optimization/info',         emoji.theory+'Оптимизация загрузки'],
            [root+'optimization/caching',      'Кэширование'],
            [root+'optimization/tree-shaking', 'Tree shaking'],
        ]
    },
]
