root = 'js-class/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/inheritance',   emoji.fire+'Наследование'],
            [root+'main/prototype',     setTheme(1, ['__proto__', 'prototype'])],
            [root+'main/new',           setTheme(1, ['new'])],
            [root+'main/constructor',   setTheme(1, ['constructor'])],
            [root+'main/return',        setTheme(1, ['return'])],
            [root+'main/new-target',    setTheme(1, ['new.target'])],
        ]
    },
    {
        title: 'Классы ES6+',
        themes: [
            [root+'class-es6/info',           emoji.theory+'Теория'],
            [root+'class-es6/item-create',    emoji.chevron+'1. Создание класса'],
            [root+'class-es6/item-getter',    emoji.chevron+'2. Геттеры и Сеттеры'],
            [root+'class-es6/item-static',    emoji.chevron+'3. Статические свойства и методы'],
            [root+'class-es6/item-inherit',   emoji.chevron+'4. Наследование'],
        
            [root+'class-es6/class-properties', 'Свойства классов'],
            [root+'class-es6/expression',       'Выражения классов'],
        ]
    },
    {
        title: 'Классы ES5 «Функциональный стиль»',
        themes: [
            [root+'class-es5-functional/create',              'Объявление'],
            [root+'class-es5-functional/methods-private',     'Приватный метод'],
            [root+'class-es5-functional/getters-and-setters', 'Геттеры и сеттеры'],
            [root+'class-es5-functional/inherit',             'Наследование'],
        ]
    },
    {
        title: 'Классы ES5 «Прототипный стиль»',
        themes: [
            [root+'class-es5-prototype/info',        emoji.theory+'Теория'],
            [root+'class-es5-prototype/methods',     'Добавление методов'],
            [root+'class-es5-prototype/inherit',     'Наследование классов'],
            [root+'class-es5-prototype/mixins',      'Примеси'],
        ]
    },
]
