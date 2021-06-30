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
            ['typescript/types/enum',    setTheme(1, ['enum'])],
        ]
    },
    {
        title: 'Операторы',
        themes: [
            ['typescript/operators/pick',      setTheme(5, ['Pick'])],
            ['typescript/operators/record',    setTheme(5, ['Record'])],
            ['typescript/operators/omit',      setTheme(5, ['Omit'])],
        ]
    },
    {
        title: setTheme(3, ['type']),
        themes: [
            ['typescript/type/type',      setTheme(1, ['type'])],

            ['typescript/type/variants',  'Варианты'],
            ['typescript/type/combine',   'Комбинация типов'],
            ['typescript/type/react',     'React'],
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
        title: 'Функции',
        themes: [
            ['typescript/function/main',               emoji.cookie+'Основы'],
            ['typescript/function/functions-overload', emoji.cookie+'Перегрузка функций'],
        ]
    },
    {
        title: 'Классы',
        themes: [
            ['typescript/class/main',         emoji.coconut+'Основы'],
            ['typescript/class/modificator',  emoji.coconut+'Модификаторы полей'],
            ['typescript/class/abstract',     emoji.coconut+'Абстрактные классы'],
        ]
    },
    {
        title: 'Другие возможности',
        themes: [
            ['typescript/capabilities/guards',     emoji.baseball+'Guards'],
            ['typescript/capabilities/generics',   emoji.baseball+'Generics'],
            ['typescript/capabilities/operators',  emoji.baseball+'Операторы'],
        ]
    },
]
