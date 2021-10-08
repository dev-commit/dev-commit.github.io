root = 'js-promise/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
		    [root+'main/info', emoji.theory+'Информация'],
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
            [root+'samples/then',                emoji.chevron+setTheme(5, ['.then'])],
            [root+'samples/catch',               emoji.chevron+setTheme(5, ['.catch'])],
            [root+'samples/finally',             emoji.chevron+setTheme(5, ['.finally'])],
            [root+'samples/many-promises',       emoji.icecream+'Несколько Promise'],
            [root+'samples/infinite-microtasks', emoji.icecream+'Бесконечные Микротаски'],
            ['', ''],
            [root+'samples/common',            'Общие задачи'],
            [root+'samples/other',             'Прочее'],
            ['', ''],
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
