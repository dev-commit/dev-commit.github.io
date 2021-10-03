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
            [root+'cycles/map',      setTheme(1, ['map'])],
            [root+'cycles/forEach',  setTheme(1, ['forEach'])],
            [root+'cycles/reduce',   setTheme(1, ['reduce', 'reduceRight'])],
            [root+'cycles/filter',   setTheme(1, ['filter'])],
            [root+'cycles/every',    setTheme(1, ['every', 'some'])],
        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/methods',  emoji.code+'Методы'],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            [root+'samples/samples',  'Примеры'],
        ]
    },
]
