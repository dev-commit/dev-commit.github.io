root = 'theory-paradigms/';

ARR_MODULE = [
    {
        title: 'Программирование',
        accent: true,
    },
    {
        title: 'ООП',
        child: true,
        themes: [
            [root+'programming/oop/principles',       emoji.fire+'Принципы'],
            [root+'programming/oop/access-modifiers', 'Модификаторы доступа'],
        ]
    },
    {
        title: 'ФП',
        child: true,
        themes: [
            [root+'programming/fp/functional', emoji.theory+'Информация'],
            [root+'programming/fp/concept',    emoji.fire+'Концепции'],
            [root+'programming/fp/currying',   'Каррирование / Частичное применение функций'],
        ]
    },
    {
        title: 'Теория',
        child: true,
        themes: [
            // getLink(root, 'info'),
            [root+'programming/theory/info',  'Информация'],
            [root+'programming/theory/imperative',  '1. Императивное'],
            [root+'programming/theory/declarative', '2. Декларативное'],
            [root+'programming/theory/reactive-programming', '3. Реактивное'],
            [root+'programming/theory/composition', 'Композиция'],
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
            [root+'architecture/architectural-concepts/monolith', 'Монолит'],
            [root+'architecture/architectural-concepts/microservices', 'Микросервисы'],
            [root+'architecture/architectural-concepts/monorepository', 'Монорепозиторий'],
        ]
    },
    {
        title: 'MVC',
        child: true,
        themes: [
            [root+'architecture/mvc/variants', emoji.theory+'Разновидности'],
            [root+'architecture/mvc/mvc',      emoji.items+'MVC'],
            [root+'architecture/mvc/mvvm',     emoji.items+'MVVM'],
        ]
    },
    {
        title: 'Подходы',
        child: true,
        themes: [
            [root+'architecture/approaches/cqrs', emoji.items+'CQRS'],
            [root+'architecture/approaches/event-sourcing',            emoji.items+'Event Sourcing'],
        ]
    },

    //--------------------------------------------------------------

    {
        title: 'Методологии разработки',
        accent: true,
    },
    {
        title: 'Методологии разработки ПО',
        child: true,
        themes: [
            [root+'methodology/dev-methodology/FSD', 'Feature-Sliced Design (FSD)'],
            [root+'methodology/dev-methodology/FDD', 'Feature-Driven Development (FDD)'],
        ]
    },
    {
        title: 'Принципы',
        child: true,
        themes: [
            [root+'methodology/principles/DDD',  emoji.items+'DDD'],
            [root+'methodology/principles/SDLC', emoji.items+'SDLC'],
        ]
    },
]
