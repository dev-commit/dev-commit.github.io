ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            ['theory-data-structures/main/info',  emoji.theory+'Информация'],
        ]
    },
    {
        title: 'Структуры данных',
        themes: [
            // TODO SUB-TITLE: Линейные
            ['theory-data-structures/structures/stack',        emoji.favorite+'Стек'],
            ['theory-data-structures/structures/queue',        emoji.favorite+'Очередь'],
            ['theory-data-structures/structures/list-linked',  emoji.favorite+'Связанный список'],

            // TODO SUB-TITLE: Остальные
            ['theory-data-structures/structures/set',          emoji.favorite+'Множество'],
            ['theory-data-structures/structures/map',          emoji.favorite+'Map'],
            ['theory-data-structures/structures/hash',         emoji.favorite+'Хэш-таблица'],
            ['theory-data-structures/structures/list',         emoji.favorite+'Список'],
            ['theory-data-structures/structures/graph',        emoji.favorite+'Граф'],
            ['theory-data-structures/structures/tree',         emoji.favorite+'Дерево'],
            ['theory-data-structures/structures/tree-prefix',  emoji.favorite+'Префиксное дерево'],
            ['theory-data-structures/structures/heap',         emoji.favorite+'Куча'],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            ['theory-data-structures/samples/intersection-array', emoji.code+'Пересечение массивов'],
            ['theory-data-structures/samples/multiple-checks',    emoji.code+'Множественные проверки'],
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
