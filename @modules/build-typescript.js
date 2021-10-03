root = 'typescript/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info',    emoji.theory+'Информация'],
            [root+'main/install', 'Установка и настройка'],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            [root+'samples/types',   emoji.fire+setTheme(4, ['Типы данных'])],
            [root+'samples/props',   emoji.chevron+setTheme(4, ['Props'])],
            [root+'samples/samples', emoji.chevron+setTheme(4, ['Примеры'])],
        ]
    },
    {
        title: 'Типы данных',
        themes: [
            [root+'types/types',   'Типы данных'],
            [root+'types/basic',   setTheme(1, ['number', 'string', '...'])],
            [root+'types/typle',   setTheme(1, ['typle'])],
            [root+'types/any',     setTheme(1, ['any'])],
            [root+'types/never',   setTheme(1, ['never'])],
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
            [root+'type/type',      emoji.favorite+setTheme(1, ['type'])],
            [root+'type/combine',   emoji.favorite+'Комбинация типов'],
        ]
    },
    {
        title: 'interface',
        accent: true,
        themes: [
            [root+'interface/main',             emoji.favorite+'Основы'],
            [root+'interface/inherit',          emoji.favorite+'Наследование интерфейсов'],
            [root+'interface/with-class',       emoji.favorite+'Взаимодействие с классами'],
            [root+'interface/dynamic-key-obj',  emoji.favorite+'Динамические ключи объекта'],
        ]
    },
    {
        title: 'generics',
        accent: true,
        themes: [
            [root+'generics/main',       emoji.favorite+'Основы'],
            [root+'generics/principle',  emoji.favorite+'Принцип работы'],
        ]
    },
    {
        title: 'enum',
        accent: true,
        themes: [
            [root+'enum/main',  emoji.favorite+'Основы'],
        ]
    },
    {
        title: 'React',
        themes: [
            [root+'react/types',         'Типы'],
            [root+'react/samples-types', 'Примеры типизации'],
        ]
    },
    {
        title: 'Функции',
        themes: [
            [root+'function/main',               'Основы'],
            [root+'function/functions-overload', 'Перегрузка функций'],
        ]
    },
    {
        title: 'Классы',
        themes: [
            [root+'class/main',         'Основы'],
            [root+'class/modificator',  'Модификаторы полей'],
            [root+'class/abstract',     'Абстрактные классы'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/guards', 'Guards'],
        ]
    },
]
