
root = 'js-object/';
commentProto = ' <u-code-comment>__proto__</u-code-comment>';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            [root+'main/spread-obj',        emoji.fire+'Spread-оператор Obj (ES-2018)'],
            [root+'main/destructive-obj',   emoji.fire+'Деструктуризация Obj (ES6)'],
        ]
    },
    {
        title: 'Use Cases',
        accent: true,
        themes: [
            [root+'use-cases/add-prop-check', 'Добавить свойство с проверкой'],
        ]
    },
    {
        title: 'Методы',
        accent: true,
        themes: [
            [root+'methods/object-create',       setTheme(3, ['Object.create'])+commentProto],
            [root+'methods/object-assign',       setTheme(3, ['Object.assign'])],
            [root+'methods/object-entries',      setTheme(3, ['Object.entries'])],
            [root+'methods/object-from-entries', setTheme(3, ['Object.fromEntries'])],
            [root+'methods/object-values',       setTheme(3, ['Object.values'])],
            [root+'methods/object-keys',         setTheme(3, ['Object.keys'])],
            [root+'methods/object-observe',      setTheme(3, ['Object.observe'])],
            [],
            [root+'methods/set-prototype-of',    setTheme(3, ['Object.setPrototypeOf'])+commentProto],
            [root+'methods/get-prototype-of',    setTheme(3, ['Object.getPrototypeOf'])+commentProto],
            [],
            [root+'methods/is-prototype-of',     setTheme(3, ['isPrototypeOf'])+commentProto],
            [root+'methods/instanceof',          setTheme(3, ['instanceof'])],
        ]
    },
    {
        title: 'Общее',
        themes: [
            [root+'common/for',              'Перебор объекта'],
            [root+'common/check-property',   'Проверка наличия свойства'],
            [root+'common/descriptor',       'Дескрипторы свойств'],
            [root+'common/extends',          'Расширяемость объектов'],
        ]
    },

    {
        title: 'Преобразования объектов',
        accent: true,
        themes: [
            [root+'conversion/logical',             'Логическое'],
            [root+'conversion/toString-vs-valueOf', emoji.star+'toString vs valueOf', false, 'done'],
            [root+'conversion/toString',            setTheme(1, ['toString'])+' Строковое'],
            [root+'conversion/valueOf',             setTheme(1, ['valueOf'])+ ' Численное'],
            [root+'conversion/toPrimitive',         setTheme(1, ['Symbol.toPrimitive'])],
        ]
    },

    {
        title: 'Примеры',
        themes: [
            [root+'samples/key-remove',                emoji.fire+'Удаление ключа'],
            [root+'samples/sort-elements-obj',         emoji.items+'Сортировка элементов массива'],
            [root+'samples/flat-array-from-obj',       emoji.items+'Плоский массив из объекта'],
            [root+'samples/setting-object-properties', emoji.items+'Задание свойств объекта'],
            [root+'samples/methods-various-obj',       emoji.items+'Метод для разных объектов'],
            [root+'samples/return-obj',                emoji.items+'Функция, возвращающая объект'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/literal-notation', emoji.code+'Литеральная нотация'],
            [root+'other/compare',       emoji.items+'Сравнение объектов'],
            [root+'other/constructor',  'Конструктор создания объекта'],
            [root+'other/prototype',    'Прототип'],
        ]
    },
]
