root = 'typescript/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info',              emoji.theory+'Информация'],
            [root+'main/install',           emoji.code+'Установка и настройка'],
            [root+'main/interface-vs-type', setTheme(5, ['Interface'])+' vs '+setTheme(5, ['Type'])],
        ]
    },
    {
        title: 'Типы данных',
        themes: [
            [root+'types/types',   emoji.fire+'Типы данных'],
            [root+'types/basic',   setTheme(1, ['number', 'string', '...'])],
            [root+'types/typle',   setTheme(1, ['typle'])],
            [root+'types/any',     setTheme(1, ['any'])],
            [root+'types/never',   setTheme(1, ['never'])],
        ]
    },
    {
        title: 'Операторы',
        themes: [
            [root+'operators/keyof',    setTheme(5, ['keyof'])],
            [root+'operators/typeof',   setTheme(5, ['typeof'])],
        ]
    },
    {
        title: 'type',
        accent: true,
        themes: [
            [root+'type/type',      emoji.star+setTheme(1, ['type'])],
            [root+'type/combine',   emoji.star+'Комбинация типов'],
        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/pick',     setTheme(5, ['Pick'])],
            [root+'methods/exclude',  setTheme(5, ['Exclude'])],
            [root+'methods/record',   setTheme(5, ['Record'])],
            [root+'methods/partial',  setTheme(5, ['Partial'])],
            [root+'methods/omit',     setTheme(5, ['Omit'])],
        ]
    },
    {
        title: 'interface',
        accent: true,
        themes: [
            [root+'interface/main',             emoji.star+'Основы'],
            [root+'interface/inherit',          emoji.star+'Наследование интерфейсов'],
            [root+'interface/with-class',       emoji.star+'Взаимодействие с классами'],
            [root+'interface/dynamic-key-obj',  emoji.star+'Динамические ключи объекта'],
            [root+'interface/samples',          'Примеры'],
        ]
    },
    {
        title: 'generics',
        accent: true,
        themes: [
            [root+'generics/main',       emoji.star+'Основы'],
            [root+'generics/principle',  emoji.star+'Принцип работы'],
        ]
    },
    {
        title: 'enum',
        accent: true,
        themes: [
            [root+'enum/main',  emoji.star+'Основы'],
        ]
    },
    {
        title: 'function',
        accent: true,
        themes: [
            [root+'function/main',               'Основы'],
            [root+'function/functions-overload', 'Перегрузка функций'],
        ]
    },
    {
        title: 'class',
        accent: true,
        themes: [
            [root+'class/main',         'Основы'],
            [root+'class/modificator',  'Модификаторы полей'],
            [root+'class/abstract',     'Абстрактные классы'],
        ]
    },
    {
        title: 'React',
        themes: [
            [root+'react/props',         setTheme(3, ['Props'])],
            [root+'react/types',         'Типы'],
            [root+'react/samples-types', 'Примеры типизации'],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            [root+'samples/samples', 'Примеры'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/guards', 'Guards'],
            [root+'other/ide',    'IDE'],
        ]
    },
]
