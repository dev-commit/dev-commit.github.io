root = 'event-loop/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
		    [root+'main/info',    emoji.theory+'Информация'],
            [root+'main/runtime', emoji.chevron+'Архитектура среды выполнения'],
		    [root+'main/tasks',   emoji.chevron+'Виды задач'],
        ]
    },
    {
        title: 'Примеры',
        themes: [
		    [root+'samples/samples', 'Примеры'],
        ]
    },
    {
        title: 'Рендеринг',
        accent: true,
        themes: [
            [root+'rendering/rendering',               emoji.theory+'Ренденинг'],
            [root+'rendering/requestAnimationFrame',   setTheme(1, ['requestAnimationFrame'])],
            [root+'rendering/repaint-and-reflow',      emoji.fire+'Repaint & Reflow'],
            [root+'rendering/critical-rendering-path', emoji.fire+'Critical Rendering Path'],
        ]
    },
    {
        title: 'Оптимизация',
        accent: true,
        themes: [
            [root+'optimization/info',                    emoji.theory+'Оптимизация загрузки'],
            [root+'optimization/caching',                 emoji.star+'Кэширование'],
            [root+'optimization/tree-shaking',            emoji.star+'Tree shaking'],
        ]
    },
]
