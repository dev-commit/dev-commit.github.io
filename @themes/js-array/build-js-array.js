root = 'js-array/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
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
        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/push',      setTheme(1, ['push', 'pop', 'unshift', 'shift'])],
            [root+'methods/length',    setTheme(1, ['length', 'reverse', 'concat'])],
            [root+'methods/sort',      setTheme(1, ['sort'])],
            [root+'methods/join',      setTheme(1, ['join', 'split'])],
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
        ]
    },
    {
        title: 'Примеры',
        themes: [
            [root+'samples/samples',  'Примеры'],
        ]
    },
]

