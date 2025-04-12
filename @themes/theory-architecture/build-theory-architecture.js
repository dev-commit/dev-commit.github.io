root = 'theory-architecture/';

ARR_MODULE = [
    {
        title: 'Архитектурные концепции',
        themes: [
            [root+'concepts/monolith', 'Монолит'],
            [root+'concepts/microservices', 'Микросервисы'],
            [root+'concepts/monorepository', 'Монорепозиторий'],
        ]
    },
    {
        title: 'MVC',
        themes: [
            [root+'mvc/variants', emoji.theory+'Разновидности'],
            [root+'mvc/mvc',      emoji.items+'MVC'],
            [root+'mvc/mvvm',     emoji.items+'MVVM'],
        ]
    },
    {
        title: 'Подходы',
        themes: [
            [root+'approaches/CQRS', emoji.items+'CQRS'],
            [root+'approaches/event-sourcing', emoji.items+'Event Sourcing'],
        ]
    },
]
