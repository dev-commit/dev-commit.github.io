root = 'theory-paradigms/';

ARR_MODULE = [
    {
        title: 'ООП',
        themes: [
            [root+'oop/principles',       emoji.fire+'Принципы'],
            [root+'oop/access-modifiers', 'Модификаторы доступа'],
        ]
    },
    {
        title: 'ФП',
        themes: [
            [root+'fp/functional', emoji.theory+'Информация'],
            [root+'fp/concept',    emoji.fire+'Концепции'],
            [root+'fp/currying',   'Каррирование / Частичное применение функций'],
        ]
    },
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            [root+'main/imperative',  '1. Императивное'],
            [root+'main/declarative', '2. Декларативное'],
            [root+'main/composition', 'Композиция'],
        ]
    },
    {
        title: 'Архитектурные методологии',
        themes: [
            [root+'architectural-methodology/fsd', 'Feature-Sliced Design (FSD)'],
            [root+'architectural-methodology/fdd', 'Feature-Driven Development (FDD)'],
        ]
    },
    {
        title: '< / >',
        themes: [
            [root+'main/ddd',                       emoji.items+'DDD'],
            [root+'main/SDLC',                      emoji.items+'SDLC'],
            [root+'main/cqrs',                      emoji.items+'CQRS'],
            [root+'main/event-sourcing',            emoji.items+'Event Sourcing'],
            [root+'main/reactive-programming',      'Реактивное программирование'],
        ]
    },
]
