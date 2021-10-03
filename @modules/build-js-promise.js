root = 'js-promise/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
		    [root+'main/info',                  emoji.theory+'Информация'],
        ]
    },
    {
        title: 'Методы',
        themes: [
		    [root+'methods/info',                  emoji.code+'Методы'],
            [root+'methods/method-new',            setTheme(1, ['new Promise'])],
		    [root+'methods/method-then-catch',     setTheme(1, ['.then', '.catch', '.finally'])],
		    [root+'methods/method-resolve-reject', setTheme(1, ['Promise.resolve', 'Promise.reject'])],
		    [root+'methods/method-all-rase',       setTheme(1, ['Promise.all', 'Promise.race'])],
        ]
    },
    {
        title: 'Примеры',
        accent: true,
        themes: [
		    [root+'samples/samples',               'Примеры'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
		    [root+'other/chaining',              'Цепочки промисов'],
		    [root+'other/executor',              'Внутренние свойства new Promise'],
        ]
    },
]
