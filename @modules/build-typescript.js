ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            ['typescript/main/info',    emoji.theory+'Информация'],
            ['typescript/main/install', emoji.lemon+'Установка и настройка'],
        ]
    },
    {
        title: 'Типы данных',
        themes: [
            ['typescript/types/types',   'Типы данных'],
            ['typescript/types/basic',   setTheme(1, ['number', 'string', '...'])],
            ['typescript/types/typle',   setTheme(1, ['typle'])],
            ['typescript/types/any',     setTheme(1, ['any'])],
            ['typescript/types/never',   setTheme(1, ['never'])],
        ]
    },
    {
        title: 'Методы',
        themes: [
            ['typescript/methods/pick',     setTheme(5, ['Pick'])],
            ['typescript/methods/exclude',  setTheme(5, ['Exclude'])],
            ['typescript/methods/record',   setTheme(5, ['Record'])],
            ['typescript/methods/omit',     setTheme(5, ['Omit'])],
        ]
    },
    {
        title: 'Операторы',
        themes: [
            ['typescript/operators/keyof',    setTheme(5, ['keyof'])],
            ['typescript/operators/typeof',   setTheme(5, ['typeof'])],
        ]
    },
    {
        title: setTheme(3, ['type']),
        themes: [
            ['typescript/type/type',      emoji.favorite+setTheme(1, ['type'])],
            ['typescript/type/variants',  emoji.favorite+'Варианты'],
            ['typescript/type/combine',   emoji.favorite+'Комбинация типов'],
        ]
    },
    {
        title: setTheme(3, ['interface']),
        themes: [
            ['typescript/interface/main',             emoji.favorite+'Основы'],
            ['typescript/interface/inherit',          emoji.favorite+'Наследование интерфейсов'],
            ['typescript/interface/with-class',       emoji.favorite+'Взаимодействие с классами'],
            ['typescript/interface/dynamic-key-obj',  emoji.favorite+'Динамические ключи объекта'],
        ]
    },
    {
        title: setTheme(3, ['generics']),
        themes: [
            ['typescript/generics/main',       emoji.favorite+'Основы'],
            ['typescript/generics/principle',  emoji.favorite+'Принцип работы'],
        ]
    },
    {
        title: setTheme(3, ['enum']),
        themes: [
            ['typescript/enum/main',  emoji.favorite+'Основы'],
        ]
    },
    {
        title: 'React',
        accent: true,
        themes: [
            ['typescript/react/types',         'Типы'],
            ['typescript/react/samples-types', 'Примеры типизации'],
        ]
    },
    {
        title: 'Функции',
        themes: [
            ['typescript/function/main',               'Основы'],
            ['typescript/function/functions-overload', 'Перегрузка функций'],
        ]
    },
    {
        title: 'Классы',
        themes: [
            ['typescript/class/main',         'Основы'],
            ['typescript/class/modificator',  'Модификаторы полей'],
            ['typescript/class/abstract',     'Абстрактные классы'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            ['typescript/other/guards', 'Guards'],
        ]
    },
]
