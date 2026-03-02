root = 'theory-programming/';

ARR_MODULE = [
    {
        title: 'ООП',
        themes: [
            [root+'oop/info',             emoji.theory+'Информация'],
            [root+'oop/access-modifiers', 'Модификаторы доступа'],
        ]
    },
    {
        title: 'Принципы ООП',
        child: true,
        themes: [
            [root+'oop/principles/encapsulation', emoji.items+'1. Инкапсуляция'],
            [root+'oop/principles/inheritance', emoji.items+'2. Наследование'],
            [root+'oop/principles/polymorphism', emoji.items+'3. Полиморфизм'],
            [root+'oop/principles/abstraction', emoji.items+'4. Абстракция'],
        ]
    },
    {
        title: 'ФП',
        themes: [
            [root+'fp/functional', emoji.theory+'Информация'],
            [root+'fp/concept',    emoji.fire+'Концепции'],
            [root+'fp/currying',   'Каррирование'],
        ]
    },
    {
        title: 'Теория',
        themes: [
            getLink(root, 'info'),
            [root+'main/composition', 'Композиция'],
        ]
    },
    {
        title: 'Виды программирования',
        themes: [
            [root+'types/imperative',  emoji.items+'Императивное'],
            [root+'types/declarative', emoji.items+'Декларативное'],
            [root+'types/reactive', emoji.items+'Реактивное'],
        ]
    },
]
