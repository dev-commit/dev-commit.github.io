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
        title: 'Методы для Type',
        themes: [
            [root+'methods/pick',     setTheme(5, ['Pick'])],
            [root+'methods/exclude',  setTheme(5, ['Exclude'])],
            [root+'methods/record',   setTheme(5, ['Record'])],
            [root+'methods/partial',  setTheme(5, ['Partial'])],
            [root+'methods/omit',     setTheme(5, ['Omit'])],
        ]
    },
    {
        title: 'Структуры',
        accent: true,
    },
    {
        title: styleSubHeader('type'),
        child: true,
        themes: [
            [root+'type/type',      emoji.unicorn+'Основы'],
            [root+'type/combine',   'Комбинация типов'],
        ]
    },
    {
        title: styleSubHeader('interface'),
        child: true,
        themes: [
            [root+'interface/main',             emoji.unicorn+'Основы'],
            [root+'interface/inherit',          'Наследование интерфейсов'],
            [root+'interface/with-class',       'Взаимодействие с классами'],
            [root+'interface/dynamic-key-obj',  'Динамические ключи объекта'],
            [root+'interface/samples',          'Примеры'],
        ]
    },
    {
        title: styleSubHeader('generics'),
        child: true,
        themes: [
            [root+'generics/main',       emoji.unicorn+'Основы'],
            [root+'generics/principle',  'Принцип работы'],
        ]
    },
    {
        title: styleSubHeader('enum'),
        child: true,
        themes: [
            [root+'enum/main',  emoji.unicorn+'Основы'],
        ]
    },
    {
        title: styleSubHeader('function'),
        child: true,
        themes: [
            [root+'function/main',               emoji.unicorn+'Основы'],
            [root+'function/functions-overload', 'Перегрузка функций'],
        ]
    },
    {
        title: styleSubHeader('class'),
        child: true,
        themes: [
            [root+'class/main',         emoji.unicorn+'Основы'],
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
