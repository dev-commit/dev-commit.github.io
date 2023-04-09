root = 'theory-paradigms/';

ARR_MODULE = [
    {
        title: 'Стандарты кода',
        themes: [
            [root+'best-practices/dry',           emoji.chevron+'DRY'],
            [root+'best-practices/kiss',          emoji.chevron+'KISS'],
            [root+'best-practices/yagni',         emoji.chevron+'YAGNI'],
            [root+'best-practices/code-smell',    'Запахи кода'],
            [root+'best-practices/refactoring',   'Рефакторинг'],
            [root+'best-practices/code-standart', 'Стандарты кода'],
        ]
    },
    {
        title: 'ФП',
        themes: [
            [root+'fp/functional',     emoji.theory+'Информация'],
            [root+'fp/concept',        emoji.fire+'Концепции'],
            [root+'fp/currying',       'Каррирование / Частичное применение функций'],
        ]
    },
    {
        title: 'ООП',
        themes: [
            [root+'oop/principles',       emoji.fire+'Принципы'],
            [root+'oop/access-modifiers', 'Модификаторы доступа'],
        ]
    },
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            [root+'main/imperative',     '1. Императивное'],
            [root+'main/declarative',    '2. Декларативное'],
            [root+'main/composition',    'Композиция'],
        ]
    },
    {
        title: '< / >',
        themes: [
            [root+'main/ddd',                  'DDD'],
            [root+'main/SDLC',                 'SDLC'],
            [root+'main/cqrs',                 'CQRS'],
            [root+'main/event-sourcing',       'Event Sourcing'],
            [root+'main/reactive-programming', 'Реактивное программирование'],
        ]
    },
]
