root = 'compilation/';

ARR_MODULE = [
    {
        title: 'Web',
        themes: [
            [root+'web/i18n',                 setTheme(1, ['i18n', 'L10n', 'a11y'])],
            [root+'web/web-applications',     'Виды веб-приложений'],
            [root+'web/frameworks',           'Фреймворки'],
            [root+'web/webkit',               'Браузерные движки'],
            [root+'web/evolution-web-design', 'Эволюция веб-дизайна'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/specification-stage',  'Стадии спецификации'],
            [root+'other/dictionary',           'Словарь'],
            [root+'other/polyfill',             'Полифиллы'],
            [root+'other/video-formats',        'Видео форматы'],
            [root+'other/trash',                'Свалка'],
        ]
    },
]
