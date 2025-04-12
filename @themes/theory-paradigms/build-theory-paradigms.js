root = 'theory-paradigms/';

ARR_MODULE = [
    {
        title: 'Виды программирования',
        accent: true,
    },
    {
        title: 'ООП',
        child: true,
        themes: [
            [root+'oop/principles',       emoji.fire+'Принципы'],
            [root+'oop/access-modifiers', 'Модификаторы доступа'],
        ]
    },
    {
        title: 'ФП',
        child: true,
        themes: [
            [root+'fp/functional', emoji.theory+'Информация'],
            [root+'fp/concept',    emoji.fire+'Концепции'],
            [root+'fp/currying',   'Каррирование / Частичное применение функций'],
        ]
    },
    {
        title: 'Теория',
        child: true,
        themes: [
            getLink(root, 'info'),
            [root+'main/imperative',  '1. Императивное'],
            [root+'main/declarative', '2. Декларативное'],
            [root+'main/composition', 'Композиция'],
        ]
    },

    //--------------------------------------------------------------

    {
        title: 'Архитектура',
        accent: true,
    },
    {
        title: 'Архитектурные концепции',
        child: true,
        themes: [
            [root+'architectural-concepts/monolith', 'Монолит'],
            [root+'architectural-concepts/microservices', 'Микросервисы'],
            [root+'architectural-concepts/monorepository', 'Монорепозиторий'],
        ]
    },
    {
        title: 'MVC',
        child: true,
        themes: [
            [root+'mvc/variants', emoji.theory+'Разновидности'],
            [root+'mvc/mvc',      emoji.items+'MVC'],
            [root+'mvc/mvvm',     emoji.items+'MVVM'],
        ]
    },

    //--------------------------------------------------------------

    {
        title: 'Методологии разработки ПО',
        themes: [
            [root+'dev-methodology/fsd', 'Feature-Sliced Design (FSD)'],
            [root+'dev-methodology/fdd', 'Feature-Driven Development (FDD)'],
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
