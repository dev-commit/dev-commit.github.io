root = 'theory-programming/';

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
