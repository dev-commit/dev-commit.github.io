ARR_MODULE = [
    {
        title: 'Теория',
        themes: [
		    ['js-async/theory/event-loop',       emoji.theory+'Event Loop'],
		    ['js-async/theory/event-loop-tasks', emoji.theory+'Event Loop: Tasks'],
        ]
    },
    {
        title: 'Promise',
        themes: [
		    ['js-async/promise/info',                  emoji.theory+'Информация'],
		    ['js-async/promise/methods',               emoji.code+'Методы'],
		    ['js-async/promise/method-new',            setTheme(1, ['new Promise'])],
		    ['js-async/promise/method-then-catch',     setTheme(1, ['.then', '.catch', '.finally'])],
		    ['js-async/promise/method-resolve-reject', setTheme(1, ['Promise.resolve', 'Promise.reject'])],
		    ['js-async/promise/method-all-rase',       setTheme(1, ['Promise.all', 'Promise.race'])],
		    ['js-async/promise/chaining',              'Цепочки промисов'],
		    ['js-async/promise/executor',              'Внутренние свойства new Promise'],
		    ['js-async/promise/samples',               'Примеры'],
        ]
    },
    {
        title: 'Асинхронный код',
        themes: [
    		['js-async/async/collback',   setTheme(3, ['1'])+' Collback Function'],
		    ['js-async/async/generators', setTheme(3, ['2'])+' Generators (ES6)'],
		    ['js-async/async/async-func', setTheme(3, ['3'])+' Async Function (ES2017)'],
		    ['js-async/async/timeout',    setTheme(1, ['setTimeout', 'setInterval'])],
        ]
    },
]
