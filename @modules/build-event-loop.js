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
        title: 'Оптимизация',
        themes: [
            [root+'optimization/info',                    emoji.theory+'Оптимизация загрузки'],
            [root+'optimization/critical-rendering-path', emoji.avocado+'Critical Rendering Path'],
            [root+'optimization/repaint-and-reflow',      emoji.avocado+'Repaint & Reflow'],
            [root+'optimization/caching',                 emoji.favorite+'Кэширование'],
            [root+'optimization/tree-shaking',            emoji.favorite+'Tree shaking'],
        ]
    },
]
