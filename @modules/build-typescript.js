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
            [root+'types/types',          emoji.theory+'Типы данных'],
            [root+'types/any-vs-unknown', emoji.theory+'<em>any</em> vs <em>unknown</em>'],

            [root+'types/string',         setTheme(3, ['string'])],
            [root+'types/array',          setTheme(3, ['array'])],
            [root+'types/function',       setTheme(3, ['function'])],
            [root+'types/promise',        setTheme(3, ['promise'])],
            [root+'types/object',         setTheme(3, ['object'])],

            [root+'types/any',            setTheme(1, ['any'])],
            [root+'types/never',          setTheme(1, ['never'])],
            [root+'types/typle',          setTheme(1, ['typle'])],
            
            [root+'types/null',           setTheme(6, ['null', 'undefined'])],
            [root+'types/number',         setTheme(6, ['number'])],
            [root+'types/boolean',        setTheme(6, ['boolean'])],
        ]
    },
    {
        title: 'Generics',
        selected: true,
        themes: [
            [root+'generics/info',       emoji.theory+'Информация'],
            [root+'generics/main',       emoji.fire+'Основное'],
        ]
    },
    {
        title: 'Interface',
        selected: true,
        themes: [
            [root+'interface/main',             emoji.unicorn+'Основы'],
            [root+'interface/inherit',          'Наследование интерфейсов'],
            [root+'interface/with-class',       'Взаимодействие с классами'],
            [root+'interface/dynamic-key-obj',  'Динамические ключи объекта'],
            [root+'interface/samples',          'Примеры'],
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
        title: 'Операторы',
        themes: [
            [root+'operators/keyof',                   setTheme(5, ['keyof'])],
            [root+'operators/typeof',                  setTheme(5, ['typeof'])],
            [root+'operators/symbol-exclamation-mark', setTheme(5, ['!'])],
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
            [root+'methods/merge',    setTheme(5, ['Merge'])],
            [root+'methods/required', setTheme(5, ['Required'])],
        ]
    },
    {
        title: 'React',
        themes: [
            [root+'react/component', setTheme(3, ['Component'])],
            [root+'react/useState',  setTheme(3, ['useState'])],
            [root+'react/useRef',    setTheme(3, ['useRef'])],
            [root+'react/children',  setTheme(3, ['Children'])],
            [root+'react/samples',   emoji.code+'Примеры'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/samples',  emoji.code+'Примеры'],
            [root+'other/guards',  'Guards'],
            [root+'other/ide',     'IDE'],
        ]
    },
]
