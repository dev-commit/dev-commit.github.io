root = 'js-async/';

ARR_MODULE = [
    {
        title: 'Асинхронный код',
        themes: [
    		[root+'async/collback',   setTheme(3, ['1'])+' Collback Function'],
		    [root+'async/generators', setTheme(3, ['2'])+' Generators (ES6)'],
		    [root+'async/async-func', setTheme(3, ['3'])+' Async Function (ES2017)'],
        ]
    },
    {
        title: 'Таймеры',
        themes: [
		    [root+'timers/setTimeout', setTheme(1, ['setTimeout', 'setInterval'])],
        ]
    },
]
