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
]
