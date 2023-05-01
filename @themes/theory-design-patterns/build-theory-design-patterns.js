root = 'theory-design-patterns/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info', true),
        ]
    },
    {
        title: '1. Creational (Порождающие)',
        selected: true,
        themes: [
            [root+'1-creational/singleton',    up+'Singleton'],
            [root+'1-creational/constructor',  'Constructor'],
            [root+'1-creational/factory',      'Factory'],
            [root+'1-creational/prototype',    'Prototype'],
            [root+'1-creational/builder',      'Builder'],
        ]
    },
    {
        title: '2. Structural (Структурные)',
        selected: true,
        themes: [
            [root+'2-structural/decorator', up+'Decorator'],
            [root+'2-structural/adapter',   'Adapter'],
            [root+'2-structural/facade',    'Facade'],
        ]
    },
    {
        title: '3. Behavioral (Поведенческие)',
        selected: true,
        themes: [
            [root+'3-behavioral/observer', up+'Observer'],
        ]
    },
    {
        title: '4. Неизвестно',
        themes: [
            [root+'patterns-other/module',           'Модуль'],
            [root+'patterns-other/module-revealing', 'Открытый модуль'],
        ]
    },
]
