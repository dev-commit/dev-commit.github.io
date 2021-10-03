root = 'js-task/';

ARR_MODULE = [
    {
        title: 'Полифилы',
        themes: [
            ['js-class/main/new',             emoji.cookie+setTheme(4, ['new'])],
            [root+'polyphyls/object-create',  emoji.cookie+setTheme(4, ['Object.create'])],
            [root+'polyphyls/bind',           emoji.cookie+setTheme(4, ['bind()'])],
            [root+'polyphyls/promise-all',    emoji.cookie+setTheme(4, ['Promise.all'])],
            [root+'polyphyls/map',            emoji.cookie+setTheme(4, ['Array.prototype.map'])],
            [root+'polyphyls/filter',         emoji.cookie+setTheme(4, ['Array.prototype.filter'])],
            [root+'polyphyls/reduce',         emoji.cookie+setTheme(4, ['Array.prototype.reduce'])],
        ]
    },
    {
        title: 'Алгоритмы',
        themes: [
            [root+'algoritms/shallow-equal',            emoji.fire+setTheme(4, ['Shallow Equal'])],
            [root+'algoritms/sum-brackets',             emoji.fire+setTheme(4, ['Сумма скобок sum(1)(2)(3)'])],
            [root+'algoritms/closing-brackets',         emoji.fire+setTheme(4, ['Проверить закрывающиеся скобки'])],

            [root+'algoritms/compose',                  emoji.code+setTheme(4, ['Compose'])],
            [root+'algoritms/memoization',              emoji.code+setTheme(4, ['Memoization'])],
            [root+'algoritms/duplicate',                emoji.code+setTheme(4, ['Duplicate'])],
            [root+'algoritms/anagram',                  emoji.code+setTheme(4, ['Анаграмма'])],
            [root+'algoritms/palindrome',               emoji.code+setTheme(4, ['Палиндром'])],
            [root+'algoritms/sum-sequence',             emoji.code+setTheme(4, ['Сумма последовательности'])],
            [root+'algoritms/function-count',           emoji.code+setTheme(4, ['Функция считает свои вызовы'])],

            [root+'algoritms/event-emitter',            emoji.cup+setTheme(4, ['EventEmitter'])],
            [root+'algoritms/series',                   emoji.cup+setTheme(4, ['Series'])],
            [root+'algoritms/shop-queue',               emoji.cup+setTheme(4, ['Магазин с кассами'])],
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
        title: 'Асинхронность',
        themes: [
            [root+'algoritms/retrier',                  emoji.code+setTheme(4, ['Retrier (запросы по URL)'])],
            [root+'algoritms/promise-make-request',     emoji.code+setTheme(4, ['Promise Make Concurrent Request'])],
            [root+'algoritms/cancel-timeout',           emoji.code+setTheme(4, ['setTimeout: отмена всех'])],
            [root+'algoritms/settimeout-for-var',       emoji.code+setTheme(4, ['setTimeout: в for без let'])],
            [root+'algoritms/promisification-function', emoji.code+setTheme(4, ['Промисификация функции'])],
        ]
    },
    {
        title: 'Массивы',
        themes: [
            [root+'arrays/intersection-arrays',  emoji.code+setTheme(4, ['Пересечение массивов'])],
            [root+'arrays/flat-array',           emoji.code+setTheme(4, ['Плоский массив'])],
            [root+'arrays/max-array-element',    emoji.code+setTheme(4, ['Максимальный элемент массива'])],
            [root+'arrays/doit',                 emoji.code+setTheme(4, ['Двумерный массив сумм'])],
            [root+'arrays/merge-sort',           emoji.code+setTheme(4, ['MergeSort'])],
            [root+'arrays/array-average-value',  emoji.code+setTheme(4, ['Получить среднюю оценку'])],
        ]
    },
    {
        title: 'Общие темы',
        themes: [
            [root+'custom/hoisting',    emoji.pizza+setTheme(4, ['Всплытие'])],
            [root+'custom/closure',     emoji.pizza+setTheme(4, ['Замыкания'])],
            [root+'custom/prototype',   emoji.pizza+setTheme(4, ['Прототипы'])],
            [root+'custom/context',     emoji.pizza+setTheme(4, ['Контекст'])],
            [root+'custom/event-loop',  emoji.pizza+setTheme(4, ['Event Loop'])],
            [root+'custom/async',       emoji.pizza+setTheme(4, ['Асинхронность'])],
            [root+'custom/promise',     emoji.pizza+setTheme(4, ['Promise'])],
            [root+'custom/async-await', emoji.pizza+setTheme(4, ['Async Await'])],
            [root+'custom/currying',    emoji.pizza+setTheme(4, ['Каррирование'])],
            [root+'custom/objects',     emoji.pizza+setTheme(4, ['Объекты'])],
            [root+'custom/arrays',      emoji.pizza+setTheme(4, ['Массивы'])],
        ]
    },
    {
        title: 'TypeScript',
        themes: [
            [root+'typescript/interface-recursion', setTheme(4, ['Рекурсия в интерфейсе'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/undefined-check',    setTheme(4, ['Проверка на "undefined"'])],
        ]
    },
]
