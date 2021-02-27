commentProto = ' <u-code-comment>__proto__</u-code-comment>';

ARR_MODULE = [
    {
        title: 'Методы',
        themes: [
            ['js-objects/methods/object-create',       emoji.chevron+setTheme(4, ['Object.create'])+commentProto],
            ['js-objects/methods/object-assign',       emoji.chevron+setTheme(4, ['Object.assign'])],
            ['js-objects/methods/object-entries',      emoji.chevron+setTheme(4, ['Object.entries()'])],
            ['js-objects/methods/object-from-entries', emoji.chevron+setTheme(4, ['Object.fromEntries()'])],
            ['js-objects/methods/object-values',       emoji.chevron+setTheme(4, ['Object.values()'])],
            ['js-objects/methods/object-keys',         emoji.chevron+setTheme(4, ['Object.keys'])],
        
            ['js-objects/methods/set-prototype-of',    emoji.chevron+setTheme(4, ['Object.setPrototypeOf'])+commentProto],
            ['js-objects/methods/get-prototype-of',    emoji.chevron+setTheme(4, ['Object.getPrototypeOf'])+commentProto],
        
            ['js-objects/methods/is-prototype-of',     emoji.chevron+setTheme(4, ['isPrototypeOf'])+commentProto],
            ['js-objects/methods/instanceof',          emoji.chevron+setTheme(4, ['instanceof'])],
        
            ['js-objects/main/for',              'Перебор объекта'],
            ['js-objects/main/check-property',   'Проверка наличия свойства'],
            ['js-objects/main/descriptor',       'Дескрипторы свойств'],
            ['js-objects/main/extends',          'Расширяемость объектов'],
        ]
    },
    {
        title: 'Основное',
        themes: [
            ['js-objects/main/info',             emoji.theory+'Теория'],
            ['js-objects/main/literal-notation', emoji.code+'Литеральная нотация'],
            ['js-objects/main/conversion',       setTheme(1, ['toString', 'valueOf'])],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            ['js-objects/samples/sort-elements-obj',         emoji.baseball+'Сортировка элементов массива'],
            ['js-objects/samples/flat-array-from-obj',       emoji.baseball+'Плоский массив из объекта'],
            ['js-objects/samples/setting-object-properties', emoji.baseball+'Задание свойств объекта'],
            ['js-objects/samples/methods-various-obj',       emoji.baseball+'Метод для разных объектов'],
            ['js-objects/samples/return-obj',                emoji.baseball+'Функция, возвращающая объект'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            ['js-objects/other/compare',       emoji.lemon+'Сравнение объектов'],
            ['js-objects/other/constructor',  'Конструктор создания объекта'],
            ['js-objects/other/prototype',    'Прототип'],
        ]
    },
]


