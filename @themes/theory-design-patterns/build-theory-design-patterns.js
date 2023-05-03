root = 'theory-design-patterns/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
        ]
    },
    {
        title: '1. Creational (Порождающие)',
        selected: true,
        themes: [
            [root+'1-creational/singleton',        'Singleton', false, 'done'],
            [root+'1-creational/constructor',      'Constructor'],
            [root+'1-creational/builder',          'Builder'],
            [root+'1-creational/prototype',        'Prototype', false, 'check'],
            [root+'1-creational/factory-method',   'Factory Method'],
            [root+'1-creational/abstract-factory', 'Abstract Factory'],
        ]
    },
    {
        title: '2. Structural (Структурные)',
        selected: true,
        themes: [
            [root+'2-structural/decorator', 'Decorator', false, 'done'],
            [root+'2-structural/adapter',   'Adapter'],
            [root+'2-structural/facade',    'Facade'],
            [root+'2-structural/flyweight', 'Flyweight'],
            [root+'2-structural/proxy',     'Proxy', false, 'check'],
            [root+'2-structural/bridge',    'Bridge'],
            [root+'2-structural/composite', 'Composite'],
        ]
    },
    {
        title: '3. Behavioral (Поведенческие)',
        selected: true,
        themes: [
            [root+'3-behavioral/observer',                'Observer', false, 'done'],
            [root+'3-behavioral/chain-of-responsibility', 'Chain Of Responsibility'],
            [root+'3-behavioral/command',                 'Command'],
            [root+'3-behavioral/iterator',                'Iterator', false, 'check'],
            [root+'3-behavioral/mediator',                'Mediator'],
            [root+'3-behavioral/state',                   'State'],
            [root+'3-behavioral/strategy',                'Strategy'],
            [root+'3-behavioral/template-method',         'Template Method'],
            [root+'3-behavioral/memento',                 'Memento'],
            [root+'3-behavioral/visitor',                 'Visitor'],
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
