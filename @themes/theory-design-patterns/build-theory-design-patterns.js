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
            [root+'1-creational/singleton',      up+setTheme(5, ['Singleton'])],
            [root+'1-creational/builder',        setTheme(5, ['Builder'])],
            [root+'1-creational/simple-factory', setTheme(4, ['Простая фабрика'])],
        ]
    },
    {
        title: '2. Structural (Структурные)',
        selected: true,
        themes: [
            [root+'2-structural/decorator', setTheme(5, ['Decorator'])],
            [root+'2-structural/facade',    setTheme(5, ['Facade'])],
        ]
    },
    {
        title: '3. Behavioral (Поведенческие)',
        selected: true,
        themes: [
            [root+'3-behavioral/observer', up+setTheme(5, ['Observer'])],
        ]
    },
    {
        title: '4. Неизвестно',
        themes: [
            [root+'patterns-other/module',           setTheme(4, ['Модуль'])],
            [root+'patterns-other/module-revealing', setTheme(4, ['Открытый модуль'])],
        ]
    },
]
