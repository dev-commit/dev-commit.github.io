
root = 'js-object/';
commentProto = ' <u-code-comment>__proto__</u-code-comment>';

ARR_MODULE = [
    {
        title: 'Методы',
        themes: [
            [root+'methods/object-create',       emoji.chevron+setTheme(4, ['Object.create()'])+commentProto],
            [root+'methods/object-assign',       emoji.chevron+setTheme(4, ['Object.assign()'])],
            [root+'methods/object-entries',      emoji.chevron+setTheme(4, ['Object.entries()'])],
            [root+'methods/object-from-entries', emoji.chevron+setTheme(4, ['Object.fromEntries()'])],
            [root+'methods/object-values',       emoji.chevron+setTheme(4, ['Object.values()'])],
            [root+'methods/object-keys',         emoji.chevron+setTheme(4, ['Object.keys()'])],
            [root+'methods/object-observe',      emoji.chevron+setTheme(4, ['Object.observe()'])],
            ['', ''],
            [root+'methods/set-prototype-of',    emoji.chevron+setTheme(4, ['Object.setPrototypeOf'])+commentProto],
            [root+'methods/get-prototype-of',    emoji.chevron+setTheme(4, ['Object.getPrototypeOf'])+commentProto],
            ['', ''],
            [root+'methods/is-prototype-of',     emoji.chevron+setTheme(4, ['isPrototypeOf'])+commentProto],
            [root+'methods/instanceof',          emoji.chevron+setTheme(4, ['instanceof'])],
            ['', ''],
            [root+'main/for',              'Перебор объекта'],
            [root+'main/check-property',   'Проверка наличия свойства'],
            [root+'main/descriptor',       'Дескрипторы свойств'],
            [root+'main/extends',          'Расширяемость объектов'],
        ]
    },
    {
        title: 'Основное',
        themes: [
            [root+'main/info',             emoji.theory+'Теория'],
            [root+'main/literal-notation', emoji.code+'Литеральная нотация'],
            [root+'main/conversion',       setTheme(1, ['toString', 'valueOf'])],
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
