root = 'theory-patterns/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info',             emoji.theory+'Информация'],
        ]
    },
    {
        title: '1. Порождающие',
        themes: [
            [root+'patterns-generating/singleton',         emoji.pizza+setTheme(4, ['«Синглтон»'])],
            [root+'patterns-generating/builder',           emoji.pizza+setTheme(4, ['«Строитель»'])],
            [root+'patterns-generating/simple-factory',    emoji.pizza+setTheme(4, ['«Простая фабрика»'])],
        ]
    },
    {
        title: '2. Структурные',
        themes: [
            [root+'patterns-structural/decorator',         emoji.pizza+setTheme(4, ['«Декоратор»'])],
            [root+'patterns-structural/facade',            emoji.pizza+setTheme(4, ['«Фасад»'])],
        ]
    },
    {
        title: '3. Поведенческие',
        themes: [
            [root+'patterns-behavioral/observer',          emoji.pizza+setTheme(4, ['«Наблюдатель»'])],
        ]
    },
    {
        title: '4. Неизвестно',
        themes: [
            [root+'patterns-other/module',            emoji.pizza+setTheme(4, ['«Модуль»'])],
            [root+'patterns-other/module-revealing',  emoji.pizza+setTheme(4, ['«Открытый модуль»'])],
        ]
    },
]