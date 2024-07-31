root = 'typescript/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
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
            [root+'generics/info',         emoji.theory+'Информация'],
            [root+'generics/main',         emoji.fire+'Основное'],

            [root+'generics/function',     emoji.star+'Стрелочная функция'],
            [root+'generics/object',       emoji.star+'Дженерик для объекта'],
            [root+'generics/inheritance',  emoji.star+'Наследование'],
            [root+'generics/interface',    emoji.star+'Дженерик в interface'],
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
        themes: [
            [root+'type/type',          emoji.fire+'Type'],
            [root+'type/combine',       'Комбинация типов', true],

            [root+'enum/main',          emoji.fire+'Enum'],

            [root+'function/main',      emoji.fire+'Function'],
            [root+'function/overload',  'Перегрузка функций', true],

            [root+'class/main',         emoji.fire+'Class'],
            [root+'class/modificator',  'Модификаторы полей', true],
            [root+'class/abstract',     'Абстрактные классы', true],
            [root+'class/decorators',   'Декораторы', true],
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
            [root+'methods/omit',     setTheme(5, ['Omit'])],
            [root+'methods/exclude',  setTheme(5, ['Exclude'])],
            [root+'methods/record',   setTheme(5, ['Record'])],
            [root+'methods/partial',  setTheme(5, ['Partial'])],
            [root+'methods/merge',    setTheme(5, ['Merge'])],
            [root+'methods/required', setTheme(5, ['Required'])],
        ]
    },
    {
        title: 'React',
        themes: [
            [root+'react/types',        emoji.unicorn+'Типы в React'],
            [root+'react/component',    setTheme(3, ['Component'])],
            [root+'react/CSSProperties',    setTheme(3, ['CSSProperties'])],
            [root+'react/useState',     setTheme(3, ['useState'])],
            [root+'react/useRef',       setTheme(3, ['useRef'])],
            [root+'react/children',     setTheme(3, ['Children'])],
            [root+'react/react-router', setTheme(3, ['react-router'])],
            [root+'react/setInterval',  'setInterval в useRef'],
            [root+'react/services',     'Описание сервисов'],
            [root+'react/samples',      emoji.code+'Примеры'],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            [root+'samples/string-for-object-key', emoji.star+'Передача строки для ключа объекта'],
            [root+'samples/generics-typing',      'Типизация через Дженерики'],
            [root+'samples/array-of-objects',     'Массив объектов'],
            [root+'samples/type-argument',        'Тип принимает агрумент'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/guards',  'Guards'],
            [root+'other/ide',     'IDE'],
        ]
    },
]
