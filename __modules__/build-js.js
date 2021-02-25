ARR_MODULE = [
    {
        title: 'Типизация',
        themes: [
            ['js/typing/typing',         emoji.theory+'Типизация'],
            ['js/typing/type-data',      emoji.theory+'Типы данных'],
            ['js/typing/type-casting',   emoji.code+'Сравнение типов'],
            ['js/typing/typeof',         setTheme(1, ['typeof'])],
            ['js/typing/symbol',         emoji.chevron+'Symbol (ES6)'],
            ['js/typing/hoisting',       emoji.fire+'Всплытие'],
            ['js/typing/variables',      setTheme(1, ['var', 'let', 'const'])],
        ]
    },
    {
        title: 'Модули',
        themes: [
            ['js/modules/module-system', 'Модульная система'],
            ['js/modules/module-es6',    'Модули (ES6)'],
        ]
    },
    {
        title: 'Основное',
        themes: [
            ['js/main/context',           emoji.baseball+'Контекст'],
            ['js/main/bind',              emoji.baseball+setTheme(1, ['bind', 'call', 'apply'])],
            ['js/main/array-cycle',       setTheme(1, ['map', 'forEach', '...'])],
            ['js/main/spread-array',      emoji.fire+'Spread Arr (ES6)'],
            ['js/main/spread-obj',        emoji.fire+'Spread Obj (ES-2018)'],
            ['js/main/destructive-array', emoji.fire+'Деструктуризация Arr (ES6)'],
            ['js/main/destructive-obj',   emoji.fire+'Деструктуризация Obj (ES6)'],
            ['js/main/ternary-operator',  'Тернарные операторы'],
        ]
    },
    {
        title: 'Структуры данных',
        themes: [
            ['js/data-structures/number',     setTheme(1, ['Number'])],
            ['js/data-structures/string',     setTheme(1, ['String'])],
            ['js/data-structures/json',       setTheme(1, ['Json'])],
            ['js/data-structures/array',      setTheme(1, ['Array'])],
            ['js/data-structures/iterators',  setTheme(1, ['Iterators (ES6)'])],
            ['js/data-structures/map',        setTheme(1, ['Map', 'WeakMap'])],
            ['js/data-structures/set',        setTheme(1, ['Set', 'WeakSet'])],
            ['js/data-structures/date-time',  setTheme(1, ['Date'])],
        ]
    },
    {
        title: 'Клиентское хранилище',
        themes: [
            ['js/client-storage/web-storage', setTheme(1, ['localStorage', 'sessionStorage'])],
            ['js/client-storage/indexed-db',  setTheme(1, ['IndexedDB'])],
            ['js/client-storage/cookie',      setTheme(1, ['cookie'])],
        ]
    },
    {
        title: 'Замыкания',
        themes: [
            ['js/closures/closures',          emoji.theory+'Замыкания'],
            ['js/closures/environment',       emoji.theory+'Области видимости'],
            ['js/closures/funarg',            emoji.theory+'Фунарг-проблема'],
        ]
    },
    {
        title: 'Функции',
        themes: [
            ['js/function/info',                      emoji.theory+'Информация'],
            ['js/function/announcement',              'Объявление'],
            ['js/function/arguments',                 'Псевдомассив аргументов arguments'],
            ['js/function/parameters',                'Параметры функции (ES6)'],
            ['js/function/arrow',                     'Стрелочные функции (ES6)'],
            ['js/function/recursion',                 'Рекурсия'],
            ['js/function/named-function-expression', 'Named Function Expression'],
        ]
    },
    {
        title: 'Дополнительно',
        themes: [
            ['js/other/garbage-collection',     'Сборщик мусора'],
            ['js/other/regexr',                 'Регулярные выражения'],
            ['js/other/math',                   'Math'],
            ['js/other/exceptions',             'Исключения'],
            ['js/other/cycle',                  'Циклы'],
            ['js/other/conditional-statements', 'Условные операторы'],  
            ['js/other/pattern-string',         'Шаблонные строки (ES6)'],
            ['js/other/object-wrappers',        'Autoboxing (Object Wrappers)'],
            ['js/other/proxy',                  'Proxy (ES6)'],
            ['js/other/asynchronous-scripts',   'Асинхронные скрипты: defer/async'],
        
            ['js/other/method-chaining',        'Цепные вызовы методов'],
            ['js/other/web-workers',            'Web Workers'],
            ['js/other/console',                setTheme(1, ['console'])],
            ['js/other/eval',                   setTheme(1, ['eval'])],
            ['js/other/notifications-api',      'Notifications API'],
            ['js/other/ecmascript',             'ECMAScript'],
            ['js/other/jsdoc',                  'Синтаксис JSDoc'],
            ['js/other/strict-mode',            'Strict Mode'],
            ['js/other/samples',                'Примеры'],
        ]
    },
]
