//---------------------------------------------------------------------
// Sass
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            ['sass/main/info',       'Информация'],
            ['sass/main/variables',  'Переменные (SassScript)'],
            ['sass/main/cascade',    'Вложенности'],
            ['sass/main/color',      'Операции над цветами'],
            ['sass/main/operations', 'Операции'],

            ['sass/main/mixin',      setTheme(1, ['@mixin'])],
            ['sass/main/extend',     setTheme(1, ['@extend'])],
            ['sass/main/import',     setTheme(1, ['@import'])],
            ['sass/main/each',       setTheme(1, ['@each'])],
            ['sass/main/at-root',    setTheme(1, ['@at-root'])],

            ['sass/main/if-else',    'Условия if-else'],
            ['sass/main/for',        'Циклы For, While'],
            ['sass/main/other',      'Дополнительно'],
        ]
    },
]
