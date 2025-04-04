root = 'js-array/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            [root+'main/spread-array', emoji.fire+'Spread-оператор Array (ES6)'],
            [root+'main/destructive-array', emoji.fire+'Деструктуризация Array (ES6)'],
        ]
    },
    {
        title: 'Циклы',
        themes: [
            [root+'cycles/info',     emoji.theory+'Информация'],
            [root+'cycles/map',      setTheme(3, ['map'])],
            [root+'cycles/forEach',  setTheme(3, ['forEach'])],
            [root+'cycles/reduce',   setTheme(3, ['reduce', 'reduceRight'])],
            [root+'cycles/filter',   setTheme(3, ['filter'])],
            [root+'cycles/every',    setTheme(3, ['every', 'some'])],
            [root+'cycles/for-while',    setTheme(5, ['for', 'while'])],
        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/push',      setTheme(1, ['push', 'pop', 'unshift', 'shift'])],
            [root+'methods/length',    setTheme(1, ['length', 'reverse', 'concat'])],
            [root+'methods/sort',      setTheme(1, ['sort', 'toSorted'])],
            [root+'methods/join',      setTheme(1, ['join'])],
            [root+'methods/slice',     setTheme(1, ['slice', 'splice'])],
            [],
            [root+'methods/includes',  setTheme(1, ['includes'])],
            [root+'methods/indexOf',   setTheme(1, ['indexOf', 'lastIndexOf'])],
            [root+'methods/find',      setTheme(1, ['find', 'findIndex'])],
            [],
            [root+'methods/isArray',   setTheme(1, ['Array.isArray'])],
            [root+'methods/from',      setTheme(1, ['Array.from'])],
            [root+'methods/flat',      setTheme(1, ['flat'])],
            [root+'methods/flatMap',   setTheme(1, ['flatMap'])],
            [root+'methods/fill',      setTheme(1, ['fill'])],
            [root+'methods/at',        setTheme(1, ['at'])],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            [root+'samples/samples',  'Примеры'],
        ]
    },
]

