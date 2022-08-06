root = 'sass/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info',       emoji.theory+'Информация'],  
        ]
    },
    {
        title: 'Операции',
        themes: [
            [root+'operations/variables',  'Переменные'],
            [root+'operations/cascade',    'Вложенности'],
            [root+'operations/color',      'Операции над цветами'],
            [root+'operations/operations', 'Операции'],
        ]
    },
    {
        title: 'Функции',
        themes: [
            [root+'functions/mixin',      setTheme(1, ['@mixin'])],
            [root+'functions/extend',     setTheme(1, ['@extend'])],
            [root+'functions/import',     setTheme(1, ['@import'])],
            [root+'functions/each',       setTheme(1, ['@each'])],
            [root+'functions/at-root',    setTheme(1, ['@at-root'])],
            [root+'functions/if-else',    setTheme(1, ['@if', '@else'])],
            [root+'functions/for',        setTheme(1, ['@for', '@while'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/other',      'Дополнительно'],
        ]
    },
]
