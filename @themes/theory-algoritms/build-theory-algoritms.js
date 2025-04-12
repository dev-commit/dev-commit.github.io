root = 'theory-algoritms/';

ARR_MODULE = [
    {
        title: 'Big-O Notation',
        themes: [
            [root+'big-o/info',      emoji.theory+'Информация'],
            [root+'big-o/variants',  emoji.star+'Варианты'],
            [root+'big-o/structure', emoji.star+'Структуры данных'],
            [root+'big-o/samples',   emoji.star+'Примеры'],
        ]
    },
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            [root+'main/paradigms', emoji.theory+'Методы разработки алгоритмов'],
        ]
    },
    {
        title: 'Алгоритмы',
        themes: [
            [root+'algoritms/sort',           emoji.items+'Сортировка'],
            [root+'algoritms/search',         emoji.items+'Поиск'],
            [root+'algoritms/string-reverse', emoji.items+'Переворот строки'],
            [root+'algoritms/hashing',        emoji.items+'Хеширование'],
            [root+'algoritms/fibonacci',      emoji.items+'Число Фибоначчи'],
            [root+'algoritms/factorial',      emoji.items+'Факториал'],
        ]
    },
]
