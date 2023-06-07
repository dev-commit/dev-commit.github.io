ARR_MODULE = [
    {
        title: 'Типизация',
        themes: [
            ['js/typing/typing',              emoji.theory+'Типизация'],
            ['js/typing/type-data',           emoji.theory+'Типы данных'],
            ['js/typing/type-casting',        emoji.code+'Сравнение типов'],
            ['js-object/conversion/toString', setTheme(1, ['toString'])],
            ['js-object/conversion/valueOf',  setTheme(1, ['valueOf'])],
            ['js/typing/typeof',              setTheme(1, ['typeof'])],
            ['js/typing/symbol',              emoji.chevron+'Symbol (ES6)'],
            ['js/typing/hoisting',            emoji.fire+'Всплытие'],
        ]
    },
    {
        title: 'Классы',
        themes: [
            ['js-class/main/inheritance',        emoji.fire+'Наследование'],
            ['js-class/main/prototype',          emoji.fire+setTheme(1, ['__proto__', 'prototype'])],
            ['js-class/main/new',                emoji.fire+setTheme(1, ['new'])],
            ['js-object/methods/object-create',  emoji.chevron+setTheme(4, ['Object.create'])],
            ['js-object/methods/object-assign',  emoji.chevron+setTheme(4, ['Object.assign'])],
            ['js-class/main/constructor',        emoji.chevron+setTheme(4, ['constructor'])],
            ['js-class/main/return',             emoji.chevron+setTheme(4, ['return'])],
        ]
    },
    {
        title: 'Основы',
        themes: [
            ['js/main/bind',                      emoji.baseball+setTheme(1, ['bind', 'call', 'apply'])],
            ['js/main/context',                   emoji.baseball+'Контекст'],
            ['js-function/function/arrow',        emoji.star+'Стрелочные функции'],
            ['js-web-api/client-storage/cookie',  emoji.fire+setTheme(1, ['cookie'])],
        ]
    },
    {
        title: 'Замыкания',
        themes: [
            ['js-function/closures/closures',     emoji.theory+'Замыкания'],
            ['js-function/closures/environment',  emoji.theory+'Области видимости'],
            ['js-function/closures/funarg',       emoji.theory+'Фунарг-проблема'],
        ]
    },
    {
        title: 'Практика',
        themes: [
            ['js/main/spread-array',       emoji.code+'Spread Arr (ES6)'],
            ['js/main/spread-obj',         emoji.code+'Spread Obj (ES-2018)'],
            ['js/main/destructive-array',  emoji.code+'Деструктуризация Arr (ES6)'],
            ['js/main/destructive-obj',    emoji.code+'Деструктуризация Obj (ES6)'],
            ['js/async/async-func',        emoji.code+'Async Function (ES2017)'],
        
        ]
    },
    {
        title: 'Теория',
        themes: [
            ['theory-paradigms/oop/principles', emoji.lemon+'ООП'],
            ['theory-paradigms/fp/concept',     emoji.lemon+'ФП'],
            ['testing/pyramid/pyramid',         emoji.theory+'Пирамида тестирования'],
            ['compilation/deployment/info',     emoji.theory+'CI / CD'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            ['compilation/application-architecture/mvc',  'MVC'],
            ['compilation/web/site-load',                 'Загрузка сайта'],
            ['compilation/dev-flow/estimation',           'Эстимация'],
        ]
    },
];
