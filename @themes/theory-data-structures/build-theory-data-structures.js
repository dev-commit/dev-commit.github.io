root = 'theory-data-structures/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
        ]
    },
    {
        title: 'Структуры данных',
        themes: [
            // TODO SUB-TITLE: Линейные
            [root+'structures/stack',        emoji.star+'Стек'],
            [root+'structures/queue',        emoji.star+'Очередь'],
            [root+'structures/list-linked',  emoji.star+'Связанный список'],

            // TODO SUB-TITLE: Остальные
            [root+'structures/set',          emoji.star+'Множество'],
            [root+'structures/map',          emoji.star+'Map'],
            [root+'structures/hash',         emoji.star+'Хэш-таблица'],
            [root+'structures/list',         emoji.star+'Список'],
            [root+'structures/graph',        emoji.star+'Граф'],
            [root+'structures/tree',         emoji.star+'Дерево'],
            [root+'structures/tree-prefix',  emoji.star+'Префиксное дерево'],
            [root+'structures/heap',         emoji.star+'Куча'],
        ]
    },
    {
        title: 'Примеры',
        themes: [
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
