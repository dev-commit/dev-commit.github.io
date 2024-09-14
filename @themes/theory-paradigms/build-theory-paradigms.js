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
        title: '< / >',
        themes: [
            [root+'main/ddd',                       emoji.chevron+'DDD'],
            [root+'main/SDLC',                      emoji.chevron+'SDLC'],
            [root+'main/cqrs',                      emoji.chevron+'CQRS'],
            [root+'main/event-sourcing',            emoji.chevron+'Event Sourcing'],
            [root+'main/reactive-programming',      'Reactive Programming'],
            [root+'main/architectural-methodology', 'Architectural Methodology'],
        ]
    },
]
