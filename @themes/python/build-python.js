root = 'python/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/cmd',  'CMD'],
            [root+'main/base', 'Базовые принципы'],
        ]
    },
    {
        title: 'Типы данных',
        themes: [
            [root+'data-types/data-types', 'Типы данных'],
            [root+'data-types/string',     'Строки'],
            [root+'data-types/array',      'Списки (массивы)'],
        ]
    },
    {
        title: 'Конструкции',
        themes: [
            [root+'constructions/if',        'Условный оператор if'],
            [root+'constructions/circle',    'Циклы'],
            [root+'constructions/function',  'Функции'],
        ]
    },
    {
        title: 'ООП',
        themes: [
            [root+'oop/class',   'Классы, ООП'],
            [root+'oop/object',  'Объекты (словари)'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/encode',    'Изменение кодировки на utf-8'],
            [root+'other/docstring', 'Строки документирования (docstring)'],
        ]
    },
    {
        title: 'Модули',
        themes: [
            [root+'modules/module', 'Модули'],
            [root+'modules/pyowm',  'Модуль определения погоды (pyowm)'],
        ]
    },
    {
        title: 'Инструменты',
        selected: true,
        themes: [
            [root+'utils/MySQL', 'MySQL'],
            [root+'utils/SQLAlchemy', 'SQLAlchemy'],
            [root+'utils/Falcon', 'Falcon'],
        ]
    },
]
