root = 'js-task/';

ARR_MODULE = [
    {
        title: 'Implementation',
        accent: true,
    },
    {
        title: 'Objects & Context',
        child: true,
        themes: [
            ['js-class/main/new',                 setTheme(1, ['new']), false, 'done'],
            [root+'implementation/object-create', setTheme(1, ['Object.create']), false, 'done'],
            [root+'implementation/bind',          setTheme(1, ['bind'])],
        ]
    },
    {
        title: 'Arrays',
        child: true,
        themes: [
            [root+'implementation/map',    setTheme(1, ['map'])],
            [root+'implementation/filter', setTheme(1, ['filter'])],
            [root+'implementation/reduce', setTheme(1, ['reduce'])],
            [root+'implementation/flat',   setTheme(1, ['flat'])+' (плоский массив deep)', false, 'done'],
        ]
    },
    {
        title: 'Async',
        child: true,
        themes: [
            [root+'implementation/promise-all', setTheme(1, ['Promise.all'])],
        ]
    },
    {
        title: 'Decorators',
        child: true,
        themes: [
            [root+'decorators/debounce',  setTheme(1, ['debounce()'])],
            [root+'decorators/once',      setTheme(1, ['once()'])],
            [root+'decorators/after',     setTheme(1, ['after()'])],
            [root+'decorators/throttle',  setTheme(1, ['throttle()'])],
            [root+'decorators/partial',   setTheme(1, ['partial()'])],
            [root+'decorators/pipe',      setTheme(1, ['pipe()'])],
        ]
    },
    {
        title: 'Алгоритмы',
        themes: [
            [root+'algoritms/anagram',            emoji.star+'Anagram', false, 'done'],
            [root+'algoritms/palindrome',         emoji.star+'Palindrome', false, 'done'],
            [root+'algoritms/compose',            emoji.star+'Compose'],
            [root+'algoritms/memoization',        emoji.star+'Memoization'],
            [root+'algoritms/duplicate',          emoji.star+'Duplicate'],
            [],
            [root+'algoritms/sum-brackets',       setTheme(2, ['sum(1)(2)(3)'])+' сумма скобок'],
            [root+'algoritms/closing-brackets',   setTheme(2, ['[]()&lt;&gt;'])+' вложенные скобки'],
            [root+'algoritms/equality-condition', setTheme(2, ['a == true && a == false'])],
            [root+'algoritms/sum-pyramid',        'Сумма пирамиды'],
            [root+'algoritms/sum-sequence',       'Сумма последовательности'],
            [root+'algoritms/function-count',     'Функция считает свои вызовы'],
            [],
            [root+'algoritms/event-emitter',      'EventEmitter', false, 'check'],
            [root+'algoritms/series',             'Series', false, 'check'],
            [root+'algoritms/shop-queue',         'Магазин с кассами', false, 'check'],
        ]
    },
    {
        title: 'Объекты',
        accent: true,
        themes: [
            [root+'objects/objects',            emoji.theory+'Объекты'],
            [root+'objects/shallow-equal',      emoji.fire+'Shallow Equal'],
            [root+'objects/deep-equal',         'Deep Equal'],
            [root+'objects/tree-object',        'Дерево из объекта'],
            [root+'objects/string-object',      'Строка объектов'],
            [root+'objects/object-from-string', 'Объект из строки'],
        ]
    },
    {
        title: 'Массивы',
        accent: true,
        themes: [
            [root+'arrays/arrays',               emoji.theory+'Массивы'],
            [root+'arrays/intersection-arrays',  emoji.fire+'Пересечение массивов'],
            [root+'arrays/sort-odd',             emoji.fire+'Сортировка нечетных значений'],
            [root+'arrays/max-array-element',    'Максимальный элемент массива'],
            [root+'arrays/array-sums',           'Двумерный массив сумм'],
            [root+'arrays/merge-sort',           'MergeSort'],
            [root+'arrays/array-average-value',  'Получить среднюю оценку'],
        ]
    },
    {
        title: 'Асинхронность',
        themes: [
            [root+'async/event-loop',                   emoji.theory+'Event Loop'],
            [root+'algoritms/retrier',                  'Retrier (запросы по URL)'],
            [root+'algoritms/promise-make-request',     'Promise Make Request'],
            [root+'algoritms/cancel-timeout',           'setTimeout: отмена всех'],
            [root+'algoritms/settimeout-for-var',       'setTimeout: в for без let'],
            [root+'algoritms/promisification-function', 'Промисификация функции'],
            [root+'algoritms/sequential-callbacks',     'Последовательные коллбэки'],
        ]
    },
    {
        title: 'Общие темы',
        themes: [
            [root+'custom/hoisting',    emoji.chevron+'Всплытие'],
            [root+'custom/closure',     emoji.chevron+'Замыкания'],
            [root+'custom/prototype',   emoji.chevron+'Прототипы'],
            [root+'custom/context',     emoji.chevron+'Контекст'],
            [root+'custom/currying',    emoji.chevron+'Каррирование'],
            [root+'custom/js',          emoji.lemon+'JavaScript'],
        ]
    },

    {
        title: 'TypeScript',
        themes: [
            [root+'typescript/interface-recursion', 'Рекурсия в интерфейсе'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/undefined-check', 'Проверка на "undefined"'],
        ]
    },
]
