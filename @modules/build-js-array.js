root = 'js-array/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info',     emoji.theory+'Информация'],
        ]
    },
    {
        title: 'Циклы',
        themes: [
            [root+'cycles/info',     emoji.theory+'Циклы для перебора массива'],
            [root+'cycles/map',      setTheme(5, ['map'])],
            [root+'cycles/forEach',  setTheme(5, ['forEach'])],
            [root+'cycles/reduce',   setTheme(5, ['reduce', 'reduceRight'])],
            [root+'cycles/filter',   setTheme(5, ['filter'])],
            [root+'cycles/every',    setTheme(5, ['every', 'some'])],
        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/push',      setTheme(1, ['push', 'pop', 'unshift', 'shift'])],
            [root+'methods/includes',  setTheme(1, ['includes'])],
            [root+'methods/indexOf',   setTheme(1, ['indexOf', 'lastIndexOf'])],
            [root+'methods/join',      setTheme(1, ['join', 'split'])],
            [root+'methods/slice',     setTheme(1, ['slice', 'splice'])],
            [root+'methods/length',    setTheme(1, ['length', 'reverse', 'concat'])],
            [root+'methods/sort',      setTheme(1, ['sort'])],
            [root+'methods/isArray',   setTheme(1, ['isArray'])],
            [root+'methods/flatMap',   setTheme(1, ['flatMap'])],
            [root+'methods/find',      setTheme(1, ['find', 'findIndex'])],
            [root+'methods/from',      setTheme(1, ['Array.from'])],
            [root+'methods/fill',      setTheme(1, ['Array.prototype.fill'])],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            [root+'samples/samples',  'Примеры'],
        ]
    },
]

