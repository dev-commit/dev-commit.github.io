
root = 'js-object/';
commentProto = ' <u-code-comment>__proto__</u-code-comment>';

ARR_MODULE = [
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
            [],
            [root+'main/for',              'Перебор объекта'],
            [root+'main/check-property',   'Проверка наличия свойства'],
            [root+'main/descriptor',       'Дескрипторы свойств'],
            [root+'main/extends',          'Расширяемость объектов'],
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
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            [root+'main/literal-notation', emoji.code+'Литеральная нотация'],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            [root+'samples/key-remove',                emoji.fire+'Удаление ключа'],
            [root+'samples/sort-elements-obj',         emoji.baseball+'Сортировка элементов массива'],
            [root+'samples/flat-array-from-obj',       emoji.baseball+'Плоский массив из объекта'],
            [root+'samples/setting-object-properties', emoji.baseball+'Задание свойств объекта'],
            [root+'samples/methods-various-obj',       emoji.baseball+'Метод для разных объектов'],
            [root+'samples/return-obj',                emoji.baseball+'Функция, возвращающая объект'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/compare',       emoji.lemon+'Сравнение объектов'],
            [root+'other/constructor',  'Конструктор создания объекта'],
            [root+'other/prototype',    'Прототип'],
        ]
    },
]
