root = 'theory-algoritms/';

ARR_MODULE = [
    {
        title: 'Big-O Notation',
        themes: [
            [root+'big-o/info',      emoji.theory+'Информация'],
            [root+'big-o/variants',  emoji.star+'Варианты'],
            [root+'big-o/structure', 'Структуры данных'],
            [root+'big-o/samples',   'Примеры'],
        ]
    },
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
        ]
    },
    {
        title: 'Алгоритмы',
        themes: [
            [root+'algoritms/sort',           emoji.items+'Сортировка'],
            [root+'algoritms/search',         emoji.items+'Поиск'],
            [root+'algoritms/string-reverse', emoji.items+'Переворот строки'],
            [root+'algoritms/hashing',        emoji.items+'Хэширование'],
            [root+'algoritms/fibonacci',      emoji.items+'Число Фибоначчи'],
            [root+'algoritms/factorial',      emoji.items+'Факториал'],
        ]
    },
    {
        title: 'Пададигмы',
        themes: [
            [root+'paradigms/brute-force',           emoji.items+'Brute-Force'+getItemComment('Метод грубой силы')],
            [root+'paradigms/divide-and-conquer',    emoji.items+'Divide and Conquer'+getItemComment('Разделяй и властвуй')],
            [root+'paradigms/dynamic-programming',   emoji.items+'Dynamic Programming'+getItemComment('Динамич. программирование')],
            [root+'paradigms/greedy-algorithm',      emoji.items+'Greedy Algorithm'+getItemComment('Жадный алгоритм')],
            [root+'paradigms/backtracking',          emoji.items+'Backtracking'+getItemComment('Поиск с возвратом')],
            [root+'paradigms/local-search',          emoji.items+'Local Search'+getItemComment('Локальный поиск')],
            [root+'paradigms/transform-and-conquer', emoji.items+'Transform and Conquer'+getItemComment('Преобразуй и властвуй')],
        ]
    },
]
