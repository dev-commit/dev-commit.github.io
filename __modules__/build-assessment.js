ARR_MODULE = [
    {
        title: 'Типизация',
        themes: [
            ['js/typing/typing',           emoji.theory+'Типизация'],
            ['js/typing/type-data',        emoji.theory+'Типы данных'],
            ['js/typing/type-casting',     emoji.code+'Сравнение типов'],
            ['js-objects/main/conversion', setTheme(1, ['toString', 'valueOf'])],
            ['js/typing/typeof',           setTheme(1, ['typeof'])],
            ['js/typing/symbol',           emoji.chevron+'Symbol (ES6)'],
            ['js/typing/hoisting',         emoji.fire+'Всплытие'],
        ]
    },
    {
        title: 'Классы',
        themes: [
            ['js-class/main/inheritance',        emoji.fire+'Наследование'],
            ['js-class/main/prototype',          emoji.fire+setTheme(1, ['__proto__', 'prototype'])],
            ['js-class/main/new',                emoji.fire+setTheme(1, ['new'])],
            ['js-objects/methods/object-create', emoji.chevron+setTheme(4, ['Object.create'])],
            ['js-objects/methods/object-assign', emoji.chevron+setTheme(4, ['Object.assign'])],
            ['js-class/main/constructor',        emoji.chevron+setTheme(4, ['constructor'])],
            ['js-class/main/return',             emoji.chevron+setTheme(4, ['return'])],
        ]
    },
    {
        title: 'Основы',
        themes: [
            ['js/main/bind',                     emoji.baseball+setTheme(1, ['bind', 'call', 'apply'])],
            ['js/main/context',                  emoji.baseball+'Контекст'],
            ['js/function/arrow',                emoji.favorite+'Стрелочные функции'],
            ['js-async/theory/event-loop',       emoji.lemon+'Event Loop'],
            ['js-async/theory/event-loop-tasks', emoji.lemon+'Event Loop: Tasks'],
        ]
    },
    {
        title: 'Замыкания',
        themes: [
            ['js/closures/closures',     emoji.theory+'Замыкания'],
            ['js/closures/environment',  emoji.theory+'Области видимости'],
            ['js/closures/funarg',       emoji.theory+'Фунарг-проблема'],
        ]
    },
    {
        title: 'Практика',
        themes: [
            ['js/main/array-cycle',        emoji.boom+setTheme(1, ['map', 'forEach', '...'])],
            ['js/main/spread-array',       emoji.code+'Spread Arr (ES6)'],
            ['js/main/spread-obj',         emoji.code+'Spread Obj (ES-2018)'],
            ['js/main/destructive-array',  emoji.pizza+'Деструктуризация Arr (ES6)'],
            ['js/main/destructive-obj',    emoji.pizza+'Деструктуризация Obj (ES6)'],
            ['js-async/async/async-func',  emoji.boom+'Async Function (ES2017)'],
        
        ]
    },
    {
        title: 'Оптимизация',
        themes: [
            ['theory/optimization/info',                     emoji.theory+'Оптимизация загрузки'],
            ['theory/optimization/critical-rendering-path',  emoji.avocado+'Critical Rendering Path'],
            ['theory/optimization/repaint-and-reflow',       emoji.avocado+'Repaint & Reflow'],
            ['theory/optimization/caching',                  emoji.favorite+'Кэширование'],
            ['theory/optimization/tree-shaking',             emoji.favorite+'Tree shaking'],
        ]
    },
    {
        title: 'Теория',
        themes: [
            ['theory-paradigms/oop/principles',      emoji.lemon+'ООП'],
            ['theory-paradigms/fp/concept',          emoji.lemon+'ФП'],
            ['theory/programming-principles/solid',  emoji.baseball+'SOLID'],
            ['theory-patterns/main/info',            emoji.theory+'Паттерны'],
            ['theory/application-architecture/mvc',  emoji.theory+'MVC'],
            ['testing/theory/pyramid',               emoji.theory+'Пирамида тестирования'],
        ]
    },
];
