root = 'js-task/';

ARR_MODULE = [
    {
        title: 'Полифилы',
        accent: true,
    },
    {
        title: 'Объекты и Контекст',
        child: true,
        themes: [
            ['js-class/main/new',             setTheme(1, ['new']), false, 'done'],
            [root+'polyphiles/object-create', setTheme(1, ['Object.create']), false, 'done'],
            [root+'polyphiles/bind',          setTheme(1, ['bind'])],
        ]
    },
    {
        title: 'Массивы',
        child: true,
        themes: [
            [root+'polyphiles/map',    setTheme(1, ['map'])],
            [root+'polyphiles/filter', setTheme(1, ['filter'])],
            [root+'polyphiles/reduce', setTheme(1, ['reduce'])],
            [root+'polyphiles/flat',   setTheme(1, ['flat'])+' (плоский массив deep)', false, 'done'],
        ]
    },
    {
        title: 'Асинхронность',
        child: true,
        themes: [
            [root+'polyphiles/promise-all', setTheme(1, ['Promise.all'])],
        ]
    },
    {
        title: 'Декораторы',
        child: true,
        themes: [
            [root+'decorators/debounce',  setTheme(6, ['debounce()'])],
            [root+'decorators/once',      setTheme(6, ['once()'])],
            [root+'decorators/after',     setTheme(6, ['after()'])],
            [root+'decorators/throttle',  setTheme(6, ['throttle()'])],
            [root+'decorators/partial',   setTheme(6, ['partial()'])],
            [root+'decorators/pipe',      setTheme(6, ['pipe()'])],
        ]
    },
    {
        title: 'Алгоритмы',
        accent: true,
        themes: [
            [root+'algoritms/anagram',            emoji.items+'Анаграмма', false, 'done'],
            [root+'algoritms/palindrome',         emoji.items+'Палиндром', false, 'done'],
            [root+'algoritms/compose',            emoji.items+'Compose', false, 'done'],
            [root+'algoritms/memoization',        emoji.items+'Мемоизация'],
            [root+'algoritms/duplicate',          emoji.items+'Duplicate Array'],
        ]
    },
    {
        title: 'Объекты',
        selected: true,
        themes: [
            [root+'objects/objects',            emoji.star+'Объекты'],
            [root+'objects/shallow-equal',      'Shallow Equal', false, 'done'],
            [root+'objects/deep-equal',         'Deep Equal', false, 'check'],
            [root+'objects/object-from-string', 'Объект из строки: "a.b.c.d"'],
            [root+'objects/tree-object',        'Дерево из объекта'],
            [root+'objects/string-object',      'Строка объектов', false, 'check'],
        ]
    },
    {
        title: 'Массивы',
        selected: true,
        themes: [
            [root+'arrays/arrays',                    emoji.star+'Массивы'],
            [root+'arrays/intersection-arrays',       'Пересечение массивов', false, 'done'],
            [root+'arrays/sort-odd',                  'Сортировка нечетных значений', false, 'done'],
            [root+'arrays/max-count-repeat-elements', 'Количество повторяющихся элементов'],
            [root+'arrays/max-array-element',         'Максимальный элемент массива'],
            [root+'arrays/array-sums',                'Двумерный массив сумм'],
            [root+'arrays/array-average-value',       'Получить среднюю оценку'],
            [root+'arrays/merge-sort',                'MergeSort', false, 'check'],
        ]
    },
    {
        title: 'Асинхронность',
        selected: true,
        themes: [
            [root+'async/event-loop',                   emoji.star+'Event Loop', false, 'check'],
            [root+'algoritms/retrier',                  'Retrier (запросы по URL)', false, 'check'],
            [root+'algoritms/promise-make-request',     'Promise Make Request'],
            [root+'algoritms/cancel-timeout',           'setTimeout: отмена всех', false, 'check'],
            [root+'algoritms/settimeout-for-var',       'setTimeout: в for без let'],
            [root+'algoritms/promisification-function', 'Промисификация функции'],
            [root+'algoritms/sequential-callbacks',     'Последовательные коллбэки', false, 'check'],
        ]
    },

    {
        title: 'JavaScript',
        themes: [
            [root+'js/data-types',         emoji.star+'Типы данных'],
            [root+'js/strangeness',        emoji.star+'Особенности'],
            [root+'js/map',                'map'],
            [root+'js/floating-point',     'Плавающая запятая'],
            [root+'js/undefined-check',    'Проверка на "undefined"'],
            [root+'js/equality-condition', setTheme(5, ['a == true && a == false'])],
        ]
    },
    {
        title: 'TypeScript',
        themes: [
            [root+'typescript/interface-recursion', 'Рекурсия в Interface'],
        ]
    },
    {
        title: 'Общие темы',
        themes: [
            [root+'custom/hoisting',    emoji.items+'Всплытие', false, 'check'],
            [root+'custom/closure',     emoji.items+'Замыкания', false, 'check'],
            [root+'custom/prototype',   emoji.items+'Прототипы', false, 'check'],
            [root+'custom/context',     emoji.items+'Контекст', false, 'check'],
            [root+'custom/currying',    emoji.items+'Каррирование', false, 'check'],
        ]
    },
    {
        title: 'Общие задачи',
        themes: [
            [root+'algoritms/sum-brackets',       setTheme(5, ['sum(1)(2)(3)'])+' сумма скобок'],
            [root+'algoritms/closing-brackets',   setTheme(5, ['[]()&lt;&gt;'])+' вложенные скобки'],
            [root+'algoritms/sum-pyramid',        'Сумма пирамиды'],
            [root+'algoritms/sum-sequence',       'Сумма последовательности'],
            [root+'algoritms/function-count',     'Функция считает свои вызовы'],
            [],
            [root+'algoritms/event-emitter',      'EventEmitter', false, 'check'],
            [root+'algoritms/series',             'Series', false, 'check'],
            [root+'algoritms/shop-queue',         'Магазин с кассами', false, 'check'],
            [root+'algoritms/three-statements',   '3 утверждения', false, 'check'],
        ]
    },
]
