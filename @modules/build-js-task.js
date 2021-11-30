root = 'js-task/';

ARR_MODULE = [
    {
        title: 'Полифилы',
        themes: [
            ['js-class/main/new',             setTheme(3, ['new'])],
            [root+'polyphyls/object-create',  setTheme(1, ['Object.create'])],
            [root+'polyphyls/bind',           setTheme(1, ['bind()'])],
            [root+'polyphyls/promise-all',    setTheme(1, ['Promise.all'])],
            [root+'polyphyls/map',            setTheme(1, ['Array.prototype.map'])],
            [root+'polyphyls/filter',         setTheme(1, ['Array.prototype.filter'])],
            [root+'polyphyls/reduce',         setTheme(1, ['Array.prototype.reduce'])],
        ]
    },
    {
        title: 'Алгоритмы',
        themes: [
            [root+'algoritms/anagram',           emoji.fire+'Анаграмма'],
            [root+'algoritms/palindrome',        emoji.fire+'Палиндром'],
            [root+'algoritms/compose',           emoji.code+'Compose'],
            [root+'algoritms/memoization',       emoji.code+'Memoization'],
            [root+'algoritms/duplicate',         emoji.code+'Duplicate'],
            [],
            [root+'algoritms/sum-brackets',       setTheme(2, ['sum(1)(2)(3)'])+' сумма скобок'],
            [root+'algoritms/closing-brackets',   setTheme(2, ['[]()&lt;&gt;'])+' вложенные скобки'],
            [root+'algoritms/equality-condition', setTheme(2, ['a == true && a == false'])],
            [root+'algoritms/sum-pyramid',        'Сумма пирамиды'],
            [root+'algoritms/sum-sequence',       'Сумма последовательности'],
            [root+'algoritms/function-count',     'Функция считает свои вызовы'],
            [],
            [root+'algoritms/event-emitter',     'EventEmitter'],
            [root+'algoritms/series',            'Series'],
            [root+'algoritms/shop-queue',        'Магазин с кассами'],
        ]
    },
    {
        title: 'Объекты',
        accent: true,
        themes: [
            [root+'objects/objects',        emoji.theory+'Объекты'],
            [root+'objects/shallow-equal',  emoji.fire+'Shallow Equal'],
            [root+'objects/deep-equal',     'Deep Equal'],
            [root+'objects/tree-object',    'Дерево из объекта'],
            [root+'objects/string-object',  'Строка объектов'],
        ]
    },
    {
        title: 'Массивы',
        accent: true,
        themes: [
            [root+'arrays/arrays',               emoji.theory+'Массивы'],
            [root+'arrays/intersection-arrays',  emoji.fire+'Пересечение массивов'],
            [root+'arrays/sort-odd',             emoji.fire+'Сортировка нечетных значений'],
            [root+'arrays/flat-array',           'Плоский массив'],
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
            [root+'algoritms/retrier',                  emoji.icecream+'Retrier (запросы по URL)'],
            [root+'algoritms/promise-make-request',     emoji.icecream+'Promise Make Request'],
            [root+'algoritms/cancel-timeout',           emoji.icecream+'setTimeout: отмена всех'],
            [root+'algoritms/settimeout-for-var',       emoji.icecream+'setTimeout: в for без let'],
            [root+'algoritms/promisification-function', emoji.icecream+'Промисификация функции'],
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
        title: 'Декораторы',
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
