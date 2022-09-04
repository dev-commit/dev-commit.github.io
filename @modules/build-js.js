root = 'js/';

ARR_MODULE = [
    {
        title: 'Типизация',
        themes: [
            [root+'typing/typing',         emoji.theory+'Типизация'],
            [root+'typing/type-data',      emoji.theory+'Типы данных'],
            [root+'typing/type-casting',   emoji.code+'Сравнение типов'],
            [root+'typing/typeof',         setTheme(1, ['typeof'])],
            [root+'typing/symbol',         emoji.chevron+'Symbol (ES6)'],
            [root+'typing/hoisting',       emoji.fire+'Всплытие'],
            [root+'typing/variables',      setTheme(1, ['var', 'let', 'const'])],
        ]
    },
    {
        title: 'ES6+',
        themes: [
            [root+'es6+/nullish-coalescing-operator', 'Оператор '+setTheme(1, ['??'])],
            [root+'es6+/optional-chaining',           'Оператор '+setTheme(1, ['?.'])],
        ]
    },
    {
        title: 'Асинхронный код',
        themes: [
    		[root+'async/collback',   setTheme(3, ['1'])+' Collback Function'],
		    [root+'async/generators', setTheme(3, ['2'])+' Generators (ES6)'],
		    [root+'async/async-func', setTheme(3, ['3'])+' Async Function (ES2017)'],
		    [root+'async/timeout',    setTheme(1, ['setTimeout', 'setInterval'])],
        ]
    },
    {
        title: 'Модули',
        themes: [
            [root+'modules/module-system', 'Модульная система'],
            [root+'modules/module-es6',    'Модули (ES6)'],
        ]
    },
    {
        title: 'Основное',
        themes: [
            [root+'main/context',           emoji.baseball+'Контекст'],
            [root+'main/bind',              emoji.baseball+setTheme(1, ['bind', 'call', 'apply'])],
            [root+'main/spread-array',      emoji.fire+'Spread Arr (ES6)'],
            [root+'main/spread-obj',        emoji.fire+'Spread Obj (ES-2018)'],
            [root+'main/destructive-array', emoji.fire+'Деструктуризация Arr (ES6)'],
            [root+'main/destructive-obj',   emoji.fire+'Деструктуризация Obj (ES6)'],
            [root+'main/ternary-operator',  'Тернарные операторы'],
            [root+'main/jsdoc',             'Документирование'],
        ]
    },
    {
        title: 'Структуры данных',
        themes: [
            [root+'data-structures/number',     setTheme(1, ['Number'])],
            [root+'data-structures/string',     setTheme(1, ['String'])],
            [root+'data-structures/json',       setTheme(1, ['Json'])],
            [root+'data-structures/iterators',  setTheme(1, ['Iterators (ES6)'])],
            [root+'data-structures/map',        setTheme(1, ['Map', 'WeakMap'])],
            [root+'data-structures/set',        setTheme(1, ['Set', 'WeakSet'])],
            [root+'data-structures/date-time',  setTheme(1, ['Date'])],
        ]
    },
    {
        title: 'Теория',
        themes: [
            [root+'theory/garbage-collection',     'Сборщик мусора'],
            [root+'theory/ecmascript',             'ECMAScript'],
        ]
    },
    {
        title: 'API',
        themes: [
            [root+'api/math',                   setTheme(6, ['Math'])],
            [root+'api/notifications-api',      setTheme(6, ['Notifications'])],
            [root+'api/console',                setTheme(6, ['console'])],
            [root+'api/eval',                   setTheme(6, ['eval'])],
        ]
    },
    {
        title: 'Дополнительно',
        themes: [
            [root+'other/exceptions',             'Исключения'],
            [root+'other/cycle',                  'Циклы'],
            [root+'other/conditional-statements', 'Условные операторы'],
            [root+'other/object-wrappers',        'Autoboxing (Object Wrappers)'],
            [root+'other/pattern-string',         'Шаблонные строки (ES6)'],
            [root+'other/proxy',                  'Proxy (ES6)'],
            [root+'other/web-workers',            'Web Workers'],
            ['', ''],
            [root+'other/asynchronous-scripts',   'Асинхронные скрипты: defer/async'],
            [root+'other/method-chaining',        'Цепные вызовы методов'],
            [root+'other/strict-mode',            'Strict Mode'],
            [root+'other/samples',                'Примеры'],
        ]
    },
]
