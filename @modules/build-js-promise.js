ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
		    ['js-promise/main/info',                  emoji.theory+'Информация'],
        ]
    },
    {
        title: 'Методы',
        themes: [
		    ['js-promise/methods/info',               emoji.code+'Методы'],
            ['js-promise/methods/method-new',            setTheme(1, ['new Promise'])],
		    ['js-promise/methods/method-then-catch',     setTheme(1, ['.then', '.catch', '.finally'])],
		    ['js-promise/methods/method-resolve-reject', setTheme(1, ['Promise.resolve', 'Promise.reject'])],
		    ['js-promise/methods/method-all-rase',       setTheme(1, ['Promise.all', 'Promise.race'])],
        ]
    },
    {
        title: 'Примеры',
        themes: [
		    ['js-promise/samples/samples',               'Примеры'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
		    ['js-promise/other/chaining',              'Цепочки промисов'],
		    ['js-promise/other/executor',              'Внутренние свойства new Promise'],
        ]
    },
]
