root = 'theory-data-structures/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info',  emoji.theory+'Информация'],
        ]
    },
    {
        title: 'Структуры данных',
        themes: [
            // TODO SUB-TITLE: Линейные
            [root+'structures/stack',        emoji.favorite+'Стек'],
            [root+'structures/queue',        emoji.favorite+'Очередь'],
            [root+'structures/list-linked',  emoji.favorite+'Связанный список'],

            // TODO SUB-TITLE: Остальные
            [root+'structures/set',          emoji.favorite+'Множество'],
            [root+'structures/map',          emoji.favorite+'Map'],
            [root+'structures/hash',         emoji.favorite+'Хэш-таблица'],
            [root+'structures/list',         emoji.favorite+'Список'],
            [root+'structures/graph',        emoji.favorite+'Граф'],
            [root+'structures/tree',         emoji.favorite+'Дерево'],
            [root+'structures/tree-prefix',  emoji.favorite+'Префиксное дерево'],
            [root+'structures/heap',         emoji.favorite+'Куча'],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            [root+'samples/intersection-array', emoji.code+'Пересечение массивов'],
            [root+'samples/multiple-checks',    emoji.code+'Множественные проверки'],
        ]
    },
    {
        title: 'Структуры данных в JavaScript',
        themes: [
            ['js/data-structures/map',        setTheme(1, ['Map', 'WeakMap'])],
            ['js/data-structures/set',        setTheme(1, ['Set', 'WeakSet'])],
        ]
    },
]
