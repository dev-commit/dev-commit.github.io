root = 'js-promise/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
		    getLink(root, 'info'),
        ]
    },
    {
        title: 'Методы',
        themes: [
		    [root+'methods/info',           emoji.code+'Методы'],
            [root+'methods/new',            setTheme(1, ['new Promise'])],
		    [root+'methods/then-catch',     setTheme(1, ['.then', '.catch', '.finally'])],
		    [root+'methods/resolve-reject', setTheme(1, ['Promise.resolve', 'Promise.reject'])],
		    [root+'methods/all-rase',       setTheme(3, ['Promise.all', 'Promise.race'])],
		    [root+'methods/allSettled',     setTheme(3, ['Promise.allSettled']), false, 'done'],
		    [root+'methods/any',     setTheme(3, ['Promise.any'])],
        ]
    },
    {
        title: 'Примеры',
        accent: true,
        themes: [
            [root+'samples/then',                emoji.items+setTheme(5, ['.then'])],
            [root+'samples/catch',               emoji.items+setTheme(5, ['.catch'])],
            [root+'samples/finally',             emoji.items+setTheme(5, ['.finally'])],
            [root+'samples/many-promises',       'Несколько Promise'],
            [root+'samples/infinite-microtasks', 'Бесконечные Микротаски'],
            [],
            [root+'samples/common',            'Общие задачи'],
            [root+'samples/other',             'Прочее'],
            [],
            [root+'samples/async',            setTheme(5, ['async await', 'setTimeout'])],
		    [root+'samples/race',             setTheme(5, ['Promise.all', 'Promise.race'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
		    [root+'other/chaining', 'Цепочки промисов'],
		    [root+'other/executor', 'Внутренние свойства new Promise'],
        ]
    },
]
