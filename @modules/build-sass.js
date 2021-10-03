root = 'sass/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info',       'Информация'],
            [root+'main/variables',  'Переменные (SassScript)'],
            [root+'main/cascade',    'Вложенности'],
            [root+'main/color',      'Операции над цветами'],
            [root+'main/operations', 'Операции'],

            [root+'main/mixin',      setTheme(1, ['@mixin'])],
            [root+'main/extend',     setTheme(1, ['@extend'])],
            [root+'main/import',     setTheme(1, ['@import'])],
            [root+'main/each',       setTheme(1, ['@each'])],
            [root+'main/at-root',    setTheme(1, ['@at-root'])],
            [root+'main/if-else',    setTheme(1, ['@if', '@else'])],
            [root+'main/for',        setTheme(1, ['@for', '@while'])],

            [root+'main/other',      'Дополнительно'],
        ]
    },
]
